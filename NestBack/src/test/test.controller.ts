import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('test')
export class TestController {
  constructor(private configService: ConfigService) {}

  @Get()
  onTest() {
    const testString = this.configService.get<string>('TEST_STING');
    console.log(`dbUser: ${testString}`);
    return 'test';
  }
}
