import { TareaProcesoEntity } from 'src/tarea-proceso/entity/tarea-proceso.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity({name: 'usuario'})
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  usu_id: number;

  @Column({ unique: true })
  usu_nombreUsuario: string;

  @Column({ unique: true})
  usu_email: string;

  @Column()
  usu_password: string;

  @OneToMany(() => TareaProcesoEntity, (tareaProceso) => tareaProceso.usuario)
  tareasProceso: TareaProcesoEntity[];

}
