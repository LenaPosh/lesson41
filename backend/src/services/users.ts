import {SignupFormData, User} from "../entities";

export const EmailTakenError = new Error("Email taken");


// map from email to user
const users: Map<string, User> = new Map();


export async function register(form: SignupFormData): Promise<User> {
    if (users.has(form.email)) {
        throw EmailTakenError;
    }

    const user: User = {
        id: form.email,
        email: form.email,
        displayName: form.displayName,

        // service fields
        password: form.password,
        createdAt: new Date(),
    }

    users.set(form.email, user);

    return user;
}