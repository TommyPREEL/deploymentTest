import { User } from "../../class/User";
import { usersMocks } from "../../mocks/user";

describe("User", () => {
  it("sould create a new user", () => {
    const user = new User(usersMocks.johnDoe);

    expect(user.create()).toEqual({
      id: 1,
      user: usersMocks.johnDoe,
    });
  });

  it("sould create a new user, and lastname was empty", () => {
    const user = new User(usersMocks.luckyLuke);

    expect(() => user.create()).toThrowError(new Error("Lastname is required"));
  });

  it("sould create a new user, and email was empty", () => {
    const user = new User(usersMocks.joeDalton);

    expect(() => user.create()).toThrowError(new Error("Email is required"));
  });

  it("sould create a new user, and email was incorrect", () => {
    const user = new User(usersMocks.jackDalton);

    expect(() => user.create()).toThrowError(
      new Error("Email is incorrect, please check it")
    );
  });

  it("sould create a new user, and 'age' was inferior at 13", () => {
    const user = new User(usersMocks.williamDalton);

    expect(() => user.create()).toThrowError(
      new Error("Age is incorrect, your age must be over than 13")
    );
  });

  it("sould create a new user, and 'age' was superior at 120", () => {
    const user = new User(usersMocks.averellDalton);

    expect(() => user.create()).toThrowError(
      new Error("Age is incorrect, your age must be less than 120")
    );
  });
});
