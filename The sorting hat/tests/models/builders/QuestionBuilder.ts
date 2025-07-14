import { Answer } from '../../../src/models/Answer';
import { Question } from '../../../src/models/Question';
import { House } from '../../../src/models/types/House';

export class QuestionBuilder {
    private text = 'Test Question';
    private answers: Answer[] = [];

    public withText(text: string) {
        this.text = text;
        return this;
    }

    public withAnswers(answers: Answer[]) {
        this.answers = answers;
        return this;
    }

    public withDefaultAnswers() {
        this.answers = [
            new Answer('Test Answer 1', House.Gryffindor),
            new Answer('Test Answer 2', House.Hufflepuff),
            new Answer('Test Answer 3', House.Ravenclaw),
            new Answer('Test Answer 4', House.Slytherin),
        ];
        return this;
    }

    public build() {
        const question = new Question(this.text);
        this.answers.forEach((answer) => question.addAnswer(answer));
        return question;
    }
}
