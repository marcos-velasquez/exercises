import inquirer from 'inquirer';
import { Question } from '../models/Question.ts';

export class QuestionView {
    constructor(public readonly questions: Question[]) {}

    public async interact(): Promise<void> {
        for (const question of this.questions) {
            const answers = question.getRequest().answers.map((answer, index) => ({ name: answer, value: index }));
            const answer = await inquirer.prompt([
                { type: 'rawlist', name: 'selection', message: question.text, choices: answers },
            ]);
            question.choose(answer.selection);
        }
    }
}
