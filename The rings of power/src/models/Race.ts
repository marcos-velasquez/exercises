export abstract class Race {
    constructor(
        public readonly name: string,
        public readonly value: number
    ) {}
}

export class EvilRace extends Race {
    private readonly EVIL = 'Evil';
}

export class GoodRace extends Race {
    private readonly GOOD = 'Good';
}
