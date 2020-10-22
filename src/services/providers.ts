import {ITasksRepository, TaskLocalStorageRepository} from "../repositories/tasks-repository";

export interface IProvider {
  tasks: ITasksRepository;
}

export const provider: IProvider = {
  tasks: new TaskLocalStorageRepository()
  // tasks: new TaskFirestoreRepository()
}
