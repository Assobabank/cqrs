import { Controller, Get, Post, Body } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskCommand } from './commands/impl/create-task.command';
import { GetTasksQuery } from './queries/impl/get-tasks.query';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createTask(@Body('title') title: string, @Body('description') description: string) {
    return this.commandBus.execute(new CreateTaskCommand(title, description));
  }

  @Get()
  async getTasks() {
    return this.queryBus.execute(new GetTasksQuery());
  }
}
