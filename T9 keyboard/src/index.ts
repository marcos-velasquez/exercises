import { T9Keyboard } from './models/T9Keyboard.ts';

(async () => {
    const t9Keyboard = new T9Keyboard();

    console.log(t9Keyboard.convert('6-666-88-777-33-3-33-888'));
    console.log(t9Keyboard.convert('6-666-88-777-33-0-3-33-888'));
    console.log(t9Keyboard.convert('2222'));
})();
