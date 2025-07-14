import assert from 'assert';
import { Question } from './Question.ts';
import { House } from './types/House.ts';

export class Hat {
    private readonly houses: Record<House, number> = {
        [House.Gryffindor]: 0,
        [House.Hufflepuff]: 0,
        [House.Ravenclaw]: 0,
        [House.Slytherin]: 0,
    };

    public select(questions: Question[]): House {
        assert(questions.every((question) => question.hasChosenHouse()));
        questions.forEach((question) => this.houses[question.getChosenHouse()!]++);
        let maxHouses: House[] = [];
        let max = 0;
        for (let house in this.houses) {
            if (this.houses[house as House] > max) {
                max = this.houses[house as House];
                maxHouses = [house as House];
            } else if (this.houses[house as House] === max) {
                maxHouses.push(house as House);
            }
        }
        return maxHouses[Math.floor(Math.random() * maxHouses.length)];
    }
}
