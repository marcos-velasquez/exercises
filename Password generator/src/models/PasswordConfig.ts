import assert from 'assert';
export interface PasswordConfig {
    length: { min: number; max: number };
    withUpperCase: boolean;
    withNumbers: boolean;
    withSymbols: boolean;
}
export class PasswordConfigBuilder {
    public static readonly MIN_LENGTH = 8;
    public static readonly MAX_LENGTH = 16;
    private config: PasswordConfig = {
        length: { min: 8, max: 16 },
        withUpperCase: true,
        withNumbers: true,
        withSymbols: true,
    };

    public withLength(min: number, max: number): PasswordConfigBuilder {
        this.withMinLength(min);
        this.withMaxLength(max);
        return this;
    }

    public withMinLength(min: number): PasswordConfigBuilder {
        assert(min >= PasswordConfigBuilder.MIN_LENGTH);
        this.config.length.min = min;
        return this;
    }

    public withMaxLength(max: number): PasswordConfigBuilder {
        assert(max <= PasswordConfigBuilder.MAX_LENGTH);
        this.config.length.max = max;
        return this;
    }

    public withUpperCase(): PasswordConfigBuilder {
        this.config.withUpperCase = true;
        return this;
    }

    public withoutUpperCase(): PasswordConfigBuilder {
        this.config.withUpperCase = false;
        return this;
    }

    public withNumbers(): PasswordConfigBuilder {
        this.config.withNumbers = true;
        return this;
    }

    public withoutNumbers(): PasswordConfigBuilder {
        this.config.withNumbers = false;
        return this;
    }

    public withSymbols(): PasswordConfigBuilder {
        this.config.withSymbols = true;
        return this;
    }

    public withoutSymbols(): PasswordConfigBuilder {
        this.config.withSymbols = false;
        return this;
    }

    public simple(): PasswordConfigBuilder {
        return this.withoutNumbers().withoutSymbols().withoutUpperCase();
    }

    public build(): PasswordConfig {
        return this.config;
    }
}
