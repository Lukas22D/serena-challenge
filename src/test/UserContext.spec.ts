import User from "../application/domain/User";

it("should throw an error if the password is less than 8 characters", () => {
    expect(() => {
        new User("John Does", "blabla@gmail.com", "123456");
    }).toThrow("Password must be at least 8 characters long");
});

it("should throw an error if the name is less than 3 characters", () => {
    expect(() => {
        new User("Jo", "blabla@gmail.com", "12345678");
    }).toThrow("Name must be at least 3 characters long");  
});

it("should throw an error if the email is invalid", () => {
    expect(() => {
        new User("John Doe", "blabla", "12345678");
    }).toThrow("Invalid email");
});
