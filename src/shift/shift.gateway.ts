import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ShiftService } from './shift.service';

@WebSocketGateway()
export class ShiftGateway {
  constructor(private readonly shiftService: ShiftService) {}

  @SubscribeMessage('booking-success')
  async handleMessage(@ConnectedSocket() socket: Socket, @MessageBody() data) {
    socket.emit('hii', data);
  }
}
