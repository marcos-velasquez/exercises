import { House } from '../models/types/House.ts';

export class Answer {
    constructor(
        public readonly text: string,
        public readonly house: House
    ) {}
}
