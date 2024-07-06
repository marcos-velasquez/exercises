import { House } from '../../src/models/types/House.ts';
import { Hat } from '../../src/models/Hat.ts';
import { Question } from '../../src/models/Question.ts';
import { QuestionBuilder } from './builders/QuestionBuilder.ts';

let hat: Hat;
let questions: Question[] = [];

beforeEach(() => {
    hat = new Hat();
    questions = [];
});

describe('Hat', () => {
    it('should select the right house from single question', () => {
        const question1 = new QuestionBuilder().withDefaultAnswers().build();
        question1.choose(3);
        questions.push(question1);
        expect(hat.select(questions)).toBe(House.Slytherin);
    });

    it('should select the right house from multiple questions', () => {
        const question1 = new QuestionBuilder().withDefaultAnswers().build();
        question1.choose(3);

        const question2 = new QuestionBuilder().withDefaultAnswers().build();
        question2.choose(1);

        const question3 = new QuestionBuilder().withDefaultAnswers().build();
        question3.choose(1);

        questions.push(question1, question2, question3);

        expect(hat.select(questions)).toBe(House.Hufflepuff);
    });

    it('should select a random house from multiple questions with same answers', () => {
        const question1 = new QuestionBuilder().withDefaultAnswers().build();
        question1.choose(3);

        const question2 = new QuestionBuilder().withDefaultAnswers().build();
        question2.choose(1);

        const question3 = new QuestionBuilder().withDefaultAnswers().build();
        question3.choose(1);

        const question4 = new QuestionBuilder().withDefaultAnswers().build();
        question4.choose(3);

        questions.push(question1, question2, question3, question4);

        expect([House.Slytherin, House.Hufflepuff]).toContain(hat.select(questions));
    });
});
