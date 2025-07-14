import fs from 'fs';
import { FileReader } from '../../src/models/FileReader';

const path = process.cwd() + '/public/test.txt';
const fileReader = new FileReader(path);

beforeAll(() => {
    fs.writeFileSync(path, 'hello world');
});

describe('FileReader', () => {
    it('should read a file', async () => {
        const content = await fileReader.read();
        expect(content).toBeDefined();
    });

    it('should read a file and return a string', async () => {
        const content = await fileReader.read();
        expect(typeof content).toBe('string');
    });

    it("should read a file and return 'hello world'", async () => {
        const content = await fileReader.read();
        expect(content).toBe('hello world');
    });
});

afterAll(() => {
    fs.unlinkSync(path);
});
