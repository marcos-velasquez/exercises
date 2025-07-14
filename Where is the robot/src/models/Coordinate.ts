export class Coordinate {
    private x = 0;
    private y = 0;

    public incrementX(x: number) {
        this.x += x;
    }

    public incrementY(y: number) {
        this.y += y;
    }

    public decrementX(x: number) {
        this.x -= x;
    }

    public decrementY(y: number) {
        this.y -= y;
    }

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }
}
