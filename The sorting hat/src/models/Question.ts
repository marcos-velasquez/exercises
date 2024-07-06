import assert from 'assert';
import { Answer } from './Answer.ts';

export class Question {
    public readonly answers: Answer[] = [];
    private chosen: Answer | null = null;

    constructor(public readonly text: string) {}

    public addAnswer(answer: Answer) {
        this.answers.push(answer);
    }

    public choose(index: number) {
        assert(index >= 0 && index < this.answers.length);
        this.chosen = this.answers[index];
    }

    public getChosenHouse() {
        return this.chosen?.house;
    }

    public hasChosenHouse() {
        return this.chosen !== null;
    }

    public getRequest() {
        return {
            question: this.text,
            answers: this.answers.map((answer) => answer.text),
        };
    }
}
