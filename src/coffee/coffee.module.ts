import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeResolver } from './coffee.resolver';
import { CoffeeService } from './coffee.service';
import { Coffee, Flavor } from './entities';
import { CoffeeFlavorsResolver } from './coffee-flavors.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
  providers: [CoffeeResolver, CoffeeService, CoffeeFlavorsResolver],
})
export class CoffeeModule {}
