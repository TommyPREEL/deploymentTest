import { IUserProfile } from "../interfaces/user.types";

export class User {
  private user: IUserProfile;

  constructor(user: IUserProfile) {
    this.user = user;
  }

  /**
   * Create a new user
   * @returns user name
   */
  public create() {
    try {
      this.validData(this.user);
      return { id: 1, user: this.user };
    } catch (error) {
      throw error;
    }
  }

  private validData(user: IUserProfile) {
    if (!user.lastname) {
      throw new Error("Lastname is required");
    }

    if (!user.email) {
      throw new Error("Email is required");
    }

    if (!this.validEmail(user.email)) {
      throw new Error("Email is incorrect, please check it");
    }

    if (user.age < 13) {
      throw new Error("Age is incorrect, your age must be over than 13");
    }

    if (user.age > 120) {
      throw new Error("Age is incorrect, your age must be less than 120");
    }
  }

  private validEmail(email: string) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email);
  }
}
