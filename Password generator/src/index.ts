const { PasswordGenerator } = await import('./models/PasswordGenerator.ts');

(async () => {
    const passwordGenerator = new PasswordGenerator();
    for (let i = 0; i < 10; i++) {
        console.log(passwordGenerator.generate());
    }
})();
