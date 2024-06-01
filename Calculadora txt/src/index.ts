import { Expression } from './models/Expression.ts';
import { FileReader } from './models/FileReader.ts';

(async () => {
    const path = process.cwd() + '/public/challenge.txt';
    const content = await new FileReader(path).read();
    const result = new Expression(content).evaluate();
    console.log(content);
    console.log(result);
})();
