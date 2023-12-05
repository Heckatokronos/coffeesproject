import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInputError } from 'apollo-server-express';

import { CreateCoffeInput } from './dto/create-coffee.input';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeesRepository: Repository<Coffee>,
  ) {}

  async findAll() {
    return this.coffeesRepository.find();
  }

  async findOne(id: number) {
    const coffee = await this.coffeesRepository.findOne({ where: { id } });
    if (!coffee) {
      throw new UserInputError(`Coffee #${id} does not exist`);
    }
    return coffee;
  }

  async create(createCoffeeInput: CreateCoffeInput) {
    const coffee = this.coffeesRepository.create(createCoffeeInput);
    return this.coffeesRepository.save(coffee);
  }
}
