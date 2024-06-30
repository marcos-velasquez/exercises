export class Object {
    public static clone<T>(obj: T): T {
        return structuredClone(obj);
    }
}
