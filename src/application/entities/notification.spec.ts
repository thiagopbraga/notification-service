import { Content } from './content';
import { Notification } from './notification';

describe('Notificação', () => {
  it('isso pode ser possível de criar uma notificação', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma nova notificação'),
      category: 'new-notification',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
