import { ShiftSchema } from './schema/shift.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';

@Injectable()
export class ShiftService {
  constructor(@InjectModel('Shift') private shiftModel: Model<any>) {}
  create(createShiftDto: CreateShiftDto) {
    return 'This action adds a new shift';
  }

  findAll(query: any) {
    return this.shiftModel.find(query);
  }

  findOne(id: number) {
    return `This action returns a #${id} shift`;
  }

  update(id: number, updateShiftDto: UpdateShiftDto) {
    return `This action updates a #${id} shift`;
  }

  remove(id: number) {
    return `This action removes a #${id} shift`;
  }
}
