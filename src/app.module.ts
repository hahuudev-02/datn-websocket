import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { EventGateway } from './event.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { ShiftModule } from './shift/shift.module';
import { ShiftSchema } from './shift/schema/shift.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://haodev3003:zsotrc23@asm.7ubljfk.mongodb.net/ASM?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'Shift', schema: ShiftSchema }]),
    ShiftModule,
  ],
  controllers: [],
  providers: [EventGateway, AppService],
})
export class AppModule {}
