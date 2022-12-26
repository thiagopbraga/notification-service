export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }
  private validadeContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validadeContentLength(content);

    if (!isContentLengthValid) {
      throw new Error(
        'Tamanho do conteúdo precisa ser maior que 5 caracteres e menos que 240 caracteres.',
      );
    }
    this.content = content;
  }
}
