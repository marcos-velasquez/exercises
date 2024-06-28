import { HandleDetector } from '../../src/models/HandleDetector';

describe('HandleDetector', () => {
    it.each([
        {
            text: 'En esta actividad de @marcos, resolvemos #retos de #programación desde https://retosdeprogramacion.com/semanales2022, que @braismoure aloja en www.github.com',
            expected: {
                user: ['@marcos', '@braismoure'],
                hashtag: ['#retos', '#programación'],
                url: ['https://retosdeprogramacion.com/semanales2022', 'www.github.com'],
            },
        },
        {
            text: 'Soy un texto sin handles',
            expected: { user: [], hashtag: [], url: [] },
        },
    ])('should detect handles', ({ text, expected }) => {
        expect(HandleDetector.detect(text)).toEqual(expected);
    });
});
