import { Expression } from './models/Expression.ts';

(async () => {
    const expressionBalanced = new Expression('{ [ a * ( c + d ) ] - 5 }');
    const expressionNotBalanced = new Expression('{ a * ( c + d ) ] - 5 }');

    console.log(expressionBalanced.value, expressionBalanced.isBalanced());
    console.log(expressionNotBalanced.value, expressionNotBalanced.isBalanced());
})();
