import { InternalServerErrorException } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  port: process.env.AGRI_DEX_BECKN_PORT,
})
export class ClientProxyGateway {
  constructor() { }

  @WebSocketServer() server: Server;

  // new connection handler
  handleConnection(@ConnectedSocket() client: Socket, ...args: any[]) {
    console.log('new client with id: ', client.id);
  }

  // response handler
  @SubscribeMessage('response')
  async handleResponse(@MessageBody() response: any) {
    console.log('response methiod');
    const transaction_id = response.context.transaction_id;
    this.server.to(transaction_id).emit('response', response);
    this.server.in(transaction_id).socketsLeave(transaction_id);
  }

  // action handlers
  @SubscribeMessage('search')
  async handleSearch(
    @MessageBody() body: any,
    @ConnectedSocket() client: Socket,
  ) {
    // console.log('search message received: ', body);
    // const transactionId = Date.now() + client.id; // generating the transactionID
    // client.join(transactionId); // creating a new room with this transactionID
    // const { block, district, bank_name } = body.filters;
    // return this.searchService.handleSearchEvent(
    //   transactionId,
    //   block,
    //   district,
    //   bank_name,
    // );
  }

  @SubscribeMessage('select')
  async handleSelect(
    @MessageBody() selectQuery: any,
    @ConnectedSocket() client: Socket,
  ) {
    // try {
    //   client.join(selectQuery.context.transaction_id);
    //   return this.selectService.handleSelectEvent(selectQuery, client.id);
    // } catch (err) {
    //   console.error('err: ', err);
    //   throw new InternalServerErrorException(err);
    // }
  }

  @SubscribeMessage('init')
  async handleInit(
    @MessageBody() initQuery: any,
    @ConnectedSocket() client: Socket,
  ) {
    // console.log('init query: ', initQuery);
    // try {
    //   client.join(initQuery.context.transaction_id);
    //   return this.initService.handleInitEvent(client.id, initQuery);
    // } catch (err) {
    //   client.emit('error: ', err);
    //   client._error(err);
    // }
  }

  @SubscribeMessage('confirm')
  async handleConfirm(
    @MessageBody() confirmQuery: any,
    @ConnectedSocket() client: Socket,
  ) {
    // console.log('confirm query: ', confirmQuery);
    // try {
    //   client.join(confirmQuery.context.transaction_id);
    //   return this.confirmService.handleConfirmEvent(client.id, confirmQuery);
    // } catch (err) {
    //   client.emit('error: ', err);
    //   client._error(err);
    // }
  }
}
