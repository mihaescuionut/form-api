import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FormRequestDto } from './dto/form-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createRequest(@Body() formRequestDto: FormRequestDto) {
    return this.appService.create(formRequestDto);
  }
}
