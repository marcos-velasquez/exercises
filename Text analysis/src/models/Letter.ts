export class Letter {
    public static count(text: string) {
        return text.replace(/\s/g, '').length;
    }
}
