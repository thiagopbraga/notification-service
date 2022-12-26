import { Module } from '@nestjs/common';
import { NotificationsController } from './infra/http/controllers/notifications.controller';
import { HttpModule } from './infra/http/http.modules';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [NotificationsController],
  providers: [PrismaService],
})
export class AppModule {}
