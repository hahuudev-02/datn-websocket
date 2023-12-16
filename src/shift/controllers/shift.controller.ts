import { Controller, Get, Query } from '@nestjs/common';
import { ShiftService } from '../shift.service';

@Controller('/api/shifts')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Get()
  findAll(@Query() query: any) {
    return this.shiftService.findAll(query);
  }
}
