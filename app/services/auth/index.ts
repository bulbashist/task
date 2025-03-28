import { usersRepo } from "@/app/data/users";
import { User, UserSchema } from "@/types/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export class AuthService {
  static async signIn(data: User) {
    const user = usersRepo.find(data.login);
    if (user) throw Error("Данный логин занят");
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(data.password, salt);
    usersRepo.add({ login: data.login, password: hash });
  }

  static async logIn(data: User) {
    try {
      UserSchema.parse(data);
    } catch {
      return NextResponse.json({}, { status: 400 });
    }

    if (!usersRepo.has(data))
      return NextResponse.json(
        { message: "Неверный логин или пароль" },
        { status: 401 }
      );

    const token = jwt.sign({ login: data.login }, process.env.JWT_KEY!, {
      expiresIn: 60 * 15,
    });

    return NextResponse.json(token);
  }

  static async verify(token: string) {
    try {
      const { login } = jwt.verify(token, process.env.JWT_KEY!) as {
        login: string;
      };
      if (usersRepo.find(login)) return true;
      return false;
    } catch {
      throw Error();
    }
  }
}
