export class Task {
  static TS_INCOMPLETED = "incompleted";
  id: string;
  title: string;
  description: string;
  status: string;

  constructor(model: any = 0) {
    if (model) {
      this.id = model.id;
      this.title = model.title;
      this.description = model.description;
    }
    this.status = Task.TS_INCOMPLETED;
  }
}

export class TaskConverer {
  toTask(model: any): Task {
    return new Task(model);
  }
  toTasks(models: any[]): Task[] {
    let response: Task[] = [];
    for (let item of models) {
      response.push(new Task(item));
    }
    return response;
  }
}
