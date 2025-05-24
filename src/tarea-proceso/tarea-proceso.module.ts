import { Module } from '@nestjs/common';
import { TareaProcesoService } from './tarea-proceso.service';
import { TareaProcesoController } from './tarea-proceso.controller';

@Module({
  providers: [TareaProcesoService],
  controllers: [TareaProcesoController]
})
export class TareaProcesoModule {}
