import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticket/ticket.module';
import { TrainModule } from './train/train.module';
import { TravelModule } from './travel/travel.module';

@Module({
  imports: [TicketModule, TrainModule, TravelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
