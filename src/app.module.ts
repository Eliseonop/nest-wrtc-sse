import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
// import { GateAwayModule } from './websockets/websocket.module'
import { WalkieController } from './walkie/walkie.controller'
import { WalkieModule } from './walkie/walkie.module'

@Module({
  imports: [WalkieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
