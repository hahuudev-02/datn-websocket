import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IShiftSchema } from '../schema/shift.schema';

@Injectable()
export class ShiftRepository {
  constructor(
    @InjectModel('Shift')
    private readonly shiftModel: Model<IShiftSchema>,
  ) {}
}
