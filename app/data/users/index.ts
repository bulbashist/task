import { User } from "@/types/user";

class UserRepository {
  users: Array<User>;

  constructor() {
    console.log("constructor");
    this.users = [
      {
        login: "admin123",
        password: "admin123",
      },
    ];
  }

  add(data: User) {
    this.users.push(data);
  }

  find(login: string) {
    return this.users.find((user) => user.login === login);
  }

  has(data: User) {
    console.log(this.users);
    return this.users.some(
      (user) => user.login === data.login && user.password === data.password
    );
  }
}

const usersRepo = new UserRepository();

export { usersRepo };
