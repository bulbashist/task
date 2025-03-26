import { RepoUser, User } from "@/types/user";
import bcrypt from "bcryptjs";

class UserRepository {
  users: Array<RepoUser>;

  constructor() {
    console.log("constructor");
    this.users = [];
  }

  add(data: RepoUser) {
    this.users.push(data);
  }

  find(login: string) {
    return this.users.find((user) => user.login === login);
  }

  has(data: User) {
    console.log(this.users);
    return this.users.some(
      (user) =>
        user.login === data.login &&
        bcrypt.compareSync(data.password, user.salt)
    );
  }
}

const usersRepo = new UserRepository();

export { usersRepo };
