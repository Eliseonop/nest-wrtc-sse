import { Body, Controller, Get, Post, Query, Sse } from '@nestjs/common'
import { Observable, interval, map } from 'rxjs'
import { WalkieService } from './walkie.service'
import { MessageEvent } from 'src/models/messageEvent.interface'
import { HaveEventData } from 'src/models/messageEventData.interface'
@Controller('walkie')
export class WalkieController {
  constructor (private readonly walkieService: WalkieService) {}

  @Get('walkie')
  getWalkie (): string {
    return this.walkieService.getHolaWakie()
  }

  @Get('users')
  getUsers (@Query('userId') userId: string): string[] {
    return this.walkieService.getUsersInLobby(userId)
  }

  @Sse('create')
  create (@Query() query: { userId: string }): Observable<MessageEvent> {
    const userId = query.userId
    const dataObservable = this.walkieService.enterToLobby(userId)

    return dataObservable.pipe(
      map((data: HaveEventData): MessageEvent => ({ data })),
    )
  }

  @Post('answer')
  answer (@Body() data: HaveEventData): {
    message: string
    data: string
  } {
    // console.log('data 41', data)
    return this.walkieService.sendAnswer(data)
  }

  @Post('offer')
  offer (@Body() data: HaveEventData): {
    message: string
    data: string
  } {
    // console.log('data 41', data)
    return this.walkieService.sendOffer(data)
  }

  // @Sse('users')
  // sse (@Query() query: { userId: string }): Observable<MessageEvent> {
  //   const userId = query.userId
  //   const dataObservable = this.walkieService.enterToLobby(userId)

  //   return dataObservable.pipe(
  //     map((data: MessageEventData): MessageEvent => ({ data })),
  //   )
  // }

  // @Post('mensaje')
  // setData (@Body() data: DataDto): { message: string; data: MessageEventData } {
  //   console.log('data', data)
  //   const messageData: MessageEventData = {
  //     chunks: data.chunks,
  //     userId: data.userId,
  //     message: data.message,
  //     timestamp: new Date().toISOString(),
  //   }
  //   return this.walkieService.enviarData(messageData)
  // }
}
