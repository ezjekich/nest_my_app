import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users_modules';

@Module({
    imports: [UsersModule],
    exports: [UsersModule],
})
export class Entities{}