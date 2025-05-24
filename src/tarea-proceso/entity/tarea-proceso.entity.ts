import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum EstadoTarea {
  PENDIENTE = 'pendiente',
  EN_PROCESO = 'en-proceso',
  COMPLETADO = 'completado',
}

@Entity({ name: 'tarea_proceso' })
export class TareaProcesoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @Column({
    type: 'enum',
    enum: EstadoTarea,
    default: EstadoTarea.PENDIENTE,
  })
  estado: EstadoTarea;

  // progreso numero entre 0 y 100
  @Column({ type: 'int', default: 0 })
  progreso: number;

  @Column()
  resultado: string;

  @Column()
  fechaInicio: Date;

  @Column({ type: "datetime", nullable: true })
  fechaFin: Date | null;

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.tareasProceso)
  @JoinColumn({ name: 'usuarioId', referencedColumnName: 'usu_id' })
  usuario: UsuarioEntity;
}
