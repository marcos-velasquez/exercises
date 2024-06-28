export class HandleDetector {
    private static userRegex = /@[\wáéíóúñü]+/g;
    private static hashtagRegex = /#[\wáéíóúñü]+/gi;
    private static urlRegex = /(https?:\/\/[^\s,]+|www\.[^\s,]+)/g;

    public static detect(text: string): Handles {
        return {
            user: text.match(HandleDetector.userRegex) || [],
            hashtag: text.match(HandleDetector.hashtagRegex) || [],
            url: text.match(HandleDetector.urlRegex) || [],
        };
    }
}

export type Handles = { user: string[]; hashtag: string[]; url: string[] };
