import { WordCounter } from './models/WordCounter.ts';

(async () => {
    const phrase = 'Hola, mi nombre es marcos. Mi nombre completo es Marcos Velasquez.';
    const wordCounter = new WordCounter(phrase);
    const countedWords = wordCounter.execute();
    console.log(countedWords);
})();
