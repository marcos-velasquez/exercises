import { faker } from '@faker-js/faker';

export const generateCommitData = (amount = 1) =>
    new Array(amount).fill(0).map(() => ({
        hash: faker.string.uuid(),
        author: faker.person.firstName(),
        message: faker.lorem.sentence(),
        date: faker.date.past(),
    }));
