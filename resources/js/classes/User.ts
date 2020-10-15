import {IUser} from "../types";

export class User implements IUser {
    avatar!: string;
    email!: string;
    id!: number;
    name!: string;
    github_nickname!: string;

    constructor(user: IUser) {
        this.avatar = user.avatar;
        this.email = user.email;
        this.id = user.id;
        this.name = user.name;
        this.github_nickname = user.github_nickname;
    }

    get githubURL() {
        return `https://github.com/${this.github_nickname}`;
    }
}
