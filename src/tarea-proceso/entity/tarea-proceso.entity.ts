import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

/* 

Se debe modelar e implementar una entidad en base de datos con los siguientes campos
mínimos:
• id: Identificador único de la tarea.
• usuarioId: Usuario que solicitó la tarea.
• tipo: Descripción del tipo de tarea (ej. “generar reporte”).
• estado: Puede ser pendiente, en-proceso, completado.
• progreso: Número entero entre 0 y 100.
• resultado: Texto opcional con el resultado o mensaje final.
• fechaInicio y fechaFin.
*/

@Entity({ name: 'tarea_proceso' })
export class TareaProcesoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @Column()
  estado: string;

  // progreso numero entre 0 y 100
  @Column({ type: 'int', default: 0 })
  progreso: number;

  @Column()
  resultado: string;

  @Column()
  fechaInicio: Date;

  @Column()
  fechaFin: Date;

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.tareasProceso)
    usuario: UsuarioEntity;

  /* @ManyToOne(() => RolEntity, (rol) => rol.usuarios)
  rol: RolEntity;

  @OneToMany(() => ActividadEntity, (actividad) => actividad.usuario)
  actividades: ActividadEntity; */
}
