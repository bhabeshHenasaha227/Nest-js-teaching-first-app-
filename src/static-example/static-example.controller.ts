import { Controller, Get } from '@nestjs/common';

@Controller('static-example')
export class StaticExampleController {
  @Get()
  getExample() {
    return {
      message: 'Static example route is working',
      fileUrl: '/hello.txt',
    };
  }
}
