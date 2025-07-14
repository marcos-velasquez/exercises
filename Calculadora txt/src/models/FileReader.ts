import fs from 'fs';

export class FileReader {
    constructor(private readonly path: string) {}

    public async read() {
        return fs.promises.readFile(this.path, 'utf8');
    }
}
