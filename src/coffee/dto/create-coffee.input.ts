import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Create coffee input object type.' })
export class CreateCoffeInput {
  @Field(() => String, { description: 'A new coffee name' })
  name: string;
  brand: string;
  flavors: string[];
}
