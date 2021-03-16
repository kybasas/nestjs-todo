import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      type: 'mongodb',
      url: 'mongodb://localhost:27027/',
      entities: [join(__dirname, '**/**.entity{.ts}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    };
  }
}
