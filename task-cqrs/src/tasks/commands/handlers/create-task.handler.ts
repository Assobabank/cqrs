import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { TasksService } from '../../tasks.service';
import { CreateTaskCommand } from '../impl/create-task.command';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(private readonly tasksService: TasksService) {}

  async execute(command: CreateTaskCommand) {
    const { title, description } = command;
    return this.tasksService.createTask(title, description);
  }
}



//src/tasks/queries/impl/get-tasks.query.ts