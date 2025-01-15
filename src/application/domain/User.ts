export default class User {
    /**
     * @param name - 
     * @param email
     * @param password
     */

    constructor(
        private name: string,
        private email: string,
        private password: string
    ) {
        if (name.length < 3) {
            throw new Error("Name must be at least 3 characters long");
        } else {
            this.name = name;
        }

        if (!this.validatorEmail(email)) {
            throw new Error("Invalid email");
        } else {
            this.email = email;
        }

        if (password.length < 8) {
            throw new Error("Password must be at least 8 characters long");
        } else {
            this.password = password;
        }
    }

    private validatorEmail(email: string): boolean {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    public setName(name: string): void {
        if (name.length >= 3) {
            this.name = name;
        } else {
            throw new Error("Name must be at least 3 characters long");
        }
    }

    public setEmail(email: string): void {
        if (this.validatorEmail(email)) {
            this.email = email;
        } else {
            throw new Error("Invalid email");
        }
    }

    public setPassword(password: string): void {
        if (password.length >= 8) {
            this.password = password;
        } else {
            throw new Error("Password must be at least 8 characters long");
        }
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }
}
