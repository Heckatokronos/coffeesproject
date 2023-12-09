import { ObjectType } from '@nestjs/graphql';
import { Drink } from 'src/common/interface/drink.interface/drink.interface';

@ObjectType({ implements: () => Drink })
export class Tea implements Drink {
  name: string;
}
