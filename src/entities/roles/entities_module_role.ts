import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles_modules';

@Module({
    imports: [RolesModule],
    exports: [RolesModule],
})
export class Entities{}