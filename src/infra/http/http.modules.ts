import { SendNotification } from '@application/use-cases/send-notification';
import { DatabaseModule } from '@infra/database/databese.modules';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
