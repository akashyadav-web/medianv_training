import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3002, { cors: true })
export class ChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
    client.emit('system', 'Welcome to the chat');
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  @SubscribeMessage('chat')
  handleChat(
    @MessageBody() message: string,
    @ConnectedSocket() client: Socket,
  ) {
    console.log('Received:', message);

    // broadcast to everyone
    this.server.emit('chat', {
      user: client.id,
      message,
    });
  }
}
