import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { Tea } from './teas/entities';
import { DateScalar } from './common/scalars';
import { CoffeeModule } from './coffee/coffee.module';
import { DrinksResolver } from './drinks/drinks.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '77191ASD',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schemas/schema.gql'),
      buildSchemaOptions: {
        orphanedTypes: [Tea],
      },
    }),
    CoffeeModule,
  ],
  controllers: [AppController],
  providers: [AppService, DateScalar, DrinksResolver],
})
export class AppModule {}
