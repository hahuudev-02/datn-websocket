import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShiftSchema } from './schema/shift.schema';
import { ShiftGateway } from './shift.gateway';
import { ShiftService } from './shift.service';
import { ShiftController } from './controllers/shift.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Shift', schema: ShiftSchema }]),
  ],
  controllers: [ShiftController],
  providers: [ShiftGateway, ShiftService],
})
export class ShiftModule {}
