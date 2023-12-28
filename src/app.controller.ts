import { Controller, Get, Patch, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/post:lol')
  postHello(): string {
    return this.appService.postHello()
  }
  @Patch()
  patchFunc(): string{
    return this.appService.patchFunc()
  }
  @Put()
  putFunc(): string{
    return this.appService.putFunc()
  }
  @Delete()
  deleteFunc(): string{
    return this.appService.deleteFunc()
  }
}
