import { Content } from './content';

describe('Conteúdo das notificações', () => {
  it('isso pode ser possível de criar um conteúdo de uma notificação', () => {
    const content = new Content('Você recebeu uma nova notificação');

    expect(content).toBeTruthy();
  });

  it('isso não pode ser possível de criar um conteúdo de uma notificação com menos que 5 caracteres', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('isso não pode ser possível de criar um conteúdo de uma notificação com mais que 240 caracteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
