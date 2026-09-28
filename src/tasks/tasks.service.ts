import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

const tasks: Task[] = [];

@Injectable()
export class TasksService {
  create(createTaskDto: CreateTaskDto) {
    const task: Task = {
      id: randomUUID(),
      ...createTaskDto,
    };

    tasks.push(task);
    return task;
  }

  findAll() {
    return tasks;
  }

  findOne(id: string) {
    const task = tasks.find((task) => task.id === id);
    return task;
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      Object.assign(task, updateTaskDto);
    }
    return task;
  }

  remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
