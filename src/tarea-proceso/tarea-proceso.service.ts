import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstadoTarea, TareaProcesoEntity } from './entity/tarea-proceso.entity';
import { Repository } from 'typeorm';
import { ProgresoGateway } from 'src/progreso/progreso.gateway';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';

@Injectable()
export class TareaProcesoService {
  constructor(
    @InjectRepository(TareaProcesoEntity)
    private readonly tareaProcesoRepository: Repository<TareaProcesoEntity>,
    private readonly progresoGateway: ProgresoGateway,

    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,

  ) {}

  async iniciarTarea(userId: string) {
    const tarea = this.tareaProcesoRepository.create({
      tipo: 'simulada',
      estado: EstadoTarea.EN_PROCESO,
      progreso: 0,
      resultado: '',
      fechaInicio: new Date(),
      fechaFin: null,
      usuario: { usu_id: userId } as any
    });
  
    console.log('tarea iniciada', tarea);
    await this.tareaProcesoRepository.save(tarea);
  
    let progreso = 0;
    const intervalo = setInterval(async () => {
      progreso += 20;
      tarea.progreso = progreso;
  
      await this.tareaProcesoRepository.save(tarea);
  
      this.progresoGateway.notifyProgress(userId, {
        tareaId: tarea.id,
        progreso: tarea.progreso,
      });
  
      if (progreso >= 100) {
        tarea.estado = EstadoTarea.COMPLETADO;
        tarea.resultado = 'Tarea completada correctamente.';
        tarea.fechaFin = new Date();

        await this.tareaProcesoRepository.save(tarea);

        console.log('tarea completada', tarea);
        
  
        clearInterval(intervalo);
  
        this.progresoGateway.notifyFullProgress(userId, {
          tareaId: tarea.id,
          progreso: 100,
        });
      }
    }, 5000); // cada 5 segundos
  
    return { mensaje: 'Tarea iniciada', tareaId: tarea.id };
  }
}
