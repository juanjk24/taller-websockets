import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ProgresoGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;

  afterInit(server: Server) {
    console.log('WebSocket Gateway inicializado');
  }

  notifyProgress(userId: string, data: any) {
    this.server.emit('progreso-tarea', data);
  }

  notifyFullProgress(userId: string, data: any) {
    this.server.emit('tarea-completada', data);
  }
}
