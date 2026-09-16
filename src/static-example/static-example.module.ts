import { Module } from '@nestjs/common';
import { StaticExampleController } from './static-example.controller';
import { StaticExampleService } from './static-example.service';

@Module({
  controllers: [StaticExampleController],
  providers: [StaticExampleService],
})
export class StaticExampleModule {}
