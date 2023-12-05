import { Injectable } from '@nestjs/common';
import { CreateCoffeInput } from './dto/create-coffee.input';

@Injectable()
export class CoffeeService {
  async findAll() {
    return [];
  }
  async findOne(id: number) {
    return null;
  }
  async create(createCoffeeInput: CreateCoffeInput) {
    return null;
  }
}
