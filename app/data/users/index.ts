import { User } from "@/types/user";
import bcrypt from "bcryptjs";

class UserRepository {
  users: Array<User>;

  constructor() {
    this.users = [
      {
        login: "bigAdmin",
        password:
          "$2a$12$gNPc5fM3I/ibWivmLOTCX.mEz7bNymviTiajMz588BAaMAYtl53Ea",
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
    return this.users.some(
      (user) =>
        user.login === data.login &&
        bcrypt.compareSync(data.password, user.password)
    );
  }
}

const usersRepo = new UserRepository();

export { usersRepo };
