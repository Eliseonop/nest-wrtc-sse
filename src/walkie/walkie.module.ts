import { Module } from '@nestjs/common'
import { WalkieService } from './walkie.service'
import { WalkieController } from './walkie.controller'

@Module({
  imports: [],
  controllers: [WalkieController],
  providers: [WalkieService],
})
export class WalkieModule {}
