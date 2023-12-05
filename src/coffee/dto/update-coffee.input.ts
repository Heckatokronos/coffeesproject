import { InputType, PartialType } from '@nestjs/graphql';
import { CreateCoffeInput } from './create-coffee.input';

@InputType()
export class UpdateCoffeeInput extends PartialType(CreateCoffeInput) {}
