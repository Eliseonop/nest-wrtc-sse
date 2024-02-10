// import {
//   MessageBody,
//   OnGatewayConnection,
//   OnGatewayDisconnect,
//   SubscribeMessage,
//   WebSocketGateway,
//   WebSocketServer,
// } from '@nestjs/websockets'
// import { Server, Socket } from 'socket.io'
// import { MessageEventData } from 'src/models/messageEventData.interface'
// import { WalkieService } from 'src/walkie/walkie.service'

// @WebSocketGateway()
// export class MySocketWebGateway
//   implements OnGatewayConnection, OnGatewayDisconnect
// {
//   listUsers: string[] = []

//   @WebSocketServer()
//   server: Server

//   constructor (private readonly walkieService: WalkieService) {}

//   handleConnection (client: Socket) {
//     console.log('client connected', client.id)
//     // Aquí puedes realizar acciones adicionales al manejar la conexión
//   }

//   handleDisconnect (client: Socket) {
//     console.log('client disconnected', client.id)
//     // Aquí puedes realizar acciones adicionales al manejar la desconexión
//   }

//   @SubscribeMessage('msg')
//   handleMessage (@MessageBody() data: any) {
//     this.server.emit('msg', data)
//   }

//   @SubscribeMessage('enterLobby')
//   handleEnterLobby (@MessageBody() userId: string, client: Socket) {
//     this.listUsers.push(userId)
//     client.join('lobby')
//     this.server.to('lobby').emit('users', this.listUsers)
//   }

//   @SubscribeMessage('offer')
//   handleOffer (@MessageBody() data: MessageEventData) {
//     const result = this.walkieService.sendOffer(data)
//     // Puedes manejar la respuesta si es necesario
//   }
// }
