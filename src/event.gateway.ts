import { InjectModel } from '@nestjs/mongoose';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Model } from 'mongoose';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
    credentials: true,
  },
})
export class EventGateway
  implements OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;
  constructor(@InjectModel('Shift') private shiftModel: Model<any>) {}
  afterInit() {}
  @SubscribeMessage('booking-success')
  async handleMessage(
    @ConnectedSocket() socket: Socket,
    @MessageBody() shiftId,
  ) {
    try {
      if (!shiftId) return;

      const result = await this.shiftModel.findById(shiftId);
      this.server.emit('booking-success', result);
    } catch (error) {}
  }

  handleConnection(client: any) {
    console.log('connection', client);
  }

  handleDisconnect(client: any) {
    console.log('disconnection', client);
  }
}
