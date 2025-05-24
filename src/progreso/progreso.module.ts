import { Module } from '@nestjs/common';
import { ProgresoGateway } from './progreso.gateway';

@Module({
  providers: [ProgresoGateway]
})
export class ProgresoModule {}
