import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async createTask(title: string, description: string): Promise<Task> {
    const task = this.taskRepository.create({ title, description });
    return this.taskRepository.save(task);
  }

  async getTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }
}
