export type VerseTemplateFactory = { for: (number: number) => VerseTemplate };

export abstract class VerseTemplate {
    public abstract lyrics(): string;
}
