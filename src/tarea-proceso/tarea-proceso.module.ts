import { Module } from '@nestjs/common';
import { TareaProcesoService } from './tarea-proceso.service';
import { TareaProcesoController } from './tarea-proceso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareaProcesoEntity } from './entity/tarea-proceso.entity';
import { ProgresoGateway } from 'src/progreso/progreso.gateway';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TareaProcesoEntity, UsuarioEntity])],
  providers: [TareaProcesoService, ProgresoGateway],
  controllers: [TareaProcesoController]
})
export class TareaProcesoModule {}
