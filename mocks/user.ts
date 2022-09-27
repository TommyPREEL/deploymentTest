import { IUserMocks } from "../interfaces/user.types";

export const usersMocks: IUserMocks = {
  johnDoe: {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    age: 30,
  },

  // Name Error
  luckyLuke: {
    firstname: "Luke",
    lastname: "",
    email: "lucky.luke@example.com",
    age: 35,
  },

  // Email empty
  joeDalton: {
    firstname: "Joe",
    lastname: "Dalton",
    email: "",
    age: 41,
  },

  // Email invalid
  jackDalton: {
    firstname: "Jack",
    lastname: "Dalton",
    email: "jack.dalton@example",
    age: 40,
  },

  // Age inferior to 13
  williamDalton: {
    firstname: "William",
    lastname: "Dalton",
    email: "william.dalton@example.com",
    age: 4,
  },

  // Age invalid
  averellDalton: {
    firstname: "Averell",
    lastname: "Dalton",
    email: "averell.dalton@example.com",
    age: 140,
  },
};
