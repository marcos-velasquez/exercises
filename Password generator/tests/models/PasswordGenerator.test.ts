import { PasswordConfigBuilder } from '../../src/models/PasswordConfig';
import { PasswordGenerator } from '../../src/models/PasswordGenerator';

describe('PasswordGenerator', () => {
    it('should generate a password with default configuration', () => {
        const passwordGenerator = new PasswordGenerator();
        for (let i = 0; i < 1000; i++) {
            const password = passwordGenerator.generate();
            expect(password.length).toBeGreaterThanOrEqual(8);
            expect(password.length).toBeLessThanOrEqual(16);
            expect(password).toMatch(/[A-Z]/);
            expect(password).toMatch(/[0-9]/);
            expect(password).toMatch(/[!@#$%^&*()_+\-=[\]{};':"\\|,`.<>/?~]/);
        }
    });

    it('should generate a password with custom (simple) configuration', () => {
        const customConfig = new PasswordConfigBuilder().simple().withLength(10, 12).build();
        const passwordGenerator = new PasswordGenerator(customConfig);
        for (let i = 0; i < 1000; i++) {
            const password = passwordGenerator.generate();
            expect(password.length).toBeGreaterThanOrEqual(10);
            expect(password.length).toBeLessThanOrEqual(12);
            expect(password).not.toMatch(/[A-Z]/);
            expect(password).not.toMatch(/[0-9]/);
            expect(password).not.toMatch(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/);
        }
    });

    it('should return a error if the password length is less than 8 or greater than 16', () => {
        expect(() => new PasswordGenerator(new PasswordConfigBuilder().withLength(7, 5).build())).toThrow();
        expect(() => new PasswordGenerator({ length: { min: 17, max: 16 } })).toThrow();
    });
});
