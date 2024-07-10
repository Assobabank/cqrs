import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { CreateTaskHandler } from './commands/handlers/create-task.handler';
import { GetTasksHandler } from './queries/handlers/get-tasks.handler';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), CqrsModule],
  controllers: [TasksController],
  providers: [TasksService, CreateTaskHandler, GetTasksHandler],
})
export class TaskModule {}
