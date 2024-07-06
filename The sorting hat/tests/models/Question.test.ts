import { Question } from '../../src/models/Question';
import { House } from '../../src/models/types/House';
import { QuestionBuilder } from './builders/QuestionBuilder';

let question: Question;

beforeEach(() => {
    question = new QuestionBuilder().withDefaultAnswers().build();
});

describe('Question', () => {
    it('should create a question with answers', () => {
        expect(question.getRequest().question).toBe('Test Question');
        expect(question.getRequest().answers).toEqual([
            'Test Answer 1',
            'Test Answer 2',
            'Test Answer 3',
            'Test Answer 4',
        ]);
    });

    it('should choose an answer', () => {
        question.choose(1);
        expect(question.getChosenHouse()).toBe(House.Hufflepuff);
        question.choose(3);
        expect(question.getChosenHouse()).toBe(House.Slytherin);
        question.choose(0);
        expect(question.getChosenHouse()).toBe(House.Gryffindor);
        question.choose(2);
        expect(question.getChosenHouse()).toBe(House.Ravenclaw);
    });
});
