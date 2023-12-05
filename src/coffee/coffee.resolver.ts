import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entity';
import { ParseIntPipe } from '@nestjs/common';
import { CreateCoffeInput } from './dto/create-coffee.input';
import { CoffeeService } from './coffee.service';

@Resolver()
export class CoffeeResolver {
  constructor(private readonly coffeService: CoffeeService) {}

  @Query(() => [Coffee], { name: 'coffees' })
  async findAll() {
    return this.coffeService.findAll();
  }

  @Query(() => Coffee, { name: 'coffee' })
  async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.coffeService.findOne(id);
  }

  @Mutation(() => Coffee, { name: 'createCoffee' })
  async create(@Args('createCoffeeInput') createCoffeeInput: CreateCoffeInput) {
    return this.coffeService.create(createCoffeeInput);
  }
}
