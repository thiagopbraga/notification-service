import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.modules';
import { DatabaseModule } from '@infra/database/databese.modules';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
