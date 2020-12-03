import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { FakeUsersRepository } from "../../repositories/implementations/FakeUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapProvider = new MailtrapMailProvider();
const fakeUsersRepository = new FakeUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  fakeUsersRepository,
  mailtrapProvider,
);

const createUserController = new CreateUserController(
  createUserUseCase,
);

export { createUserUseCase, createUserController };
