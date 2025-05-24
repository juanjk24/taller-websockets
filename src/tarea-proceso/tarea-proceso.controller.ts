import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { TareaProcesoService } from './tarea-proceso.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('tareas')
export class TareaProcesoController {
  constructor(private readonly tareaProcesoService: TareaProcesoService) {}

  @Post('iniciar')
  @UseGuards(JwtAuthGuard)
  iniciarTarea(@Request() req: any) {
    const userId = req.user.userId;    
    return this.tareaProcesoService.iniciarTarea(userId);
  }
}
