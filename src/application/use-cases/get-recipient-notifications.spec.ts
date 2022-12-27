import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recepient-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recepient-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recepient-2' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recepient-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recepient-1' }),
        expect.objectContaining({ recipientId: 'recepient-1' }),
      ]),
    );
  });
});
