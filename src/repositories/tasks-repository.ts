import {Task, TaskConverer} from "../models/tasks";

export interface ITasksRepository {
  fetchList():Promise<Task[]>;
  save(model:Task):Promise<Task>;
  // Home tasks: delete, update
}

// export class TaskFirestoreRepository implements ITasksRepository ...

export class TaskLocalStorageRepository implements ITasksRepository{
  converter:TaskConverer;

  getStorage():Task[]{
    let data:any[]= localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')): [];
    return this.converter.toTasks(data);
  }

  saveStorage(data:Task[]):void{
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  fetchList(): Promise<Task[]> {
    return new Promise<Task[]>((resolve)=>{
      setTimeout(()=>{
        resolve(this.getStorage());
      },3000);

    });
  }

  save(model: Task): Promise<Task> {
    return new Promise<Task>((resolve)=>{
      let tasks = this.getStorage();
      tasks.push(new Task(model));
      this.saveStorage(tasks);
      resolve(model);
    });
 }

 constructor() {
    this.converter = new TaskConverer();
 }
}

