import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TasksService } from '../../tasks.service';
import { GetTasksQuery } from '../impl/get-tasks.query';

@QueryHandler(GetTasksQuery)
export class GetTasksHandler implements IQueryHandler<GetTasksQuery> {
  constructor(private readonly tasksService: TasksService) {}

  async execute() {
    return this.tasksService.getTasks();
  }
}
