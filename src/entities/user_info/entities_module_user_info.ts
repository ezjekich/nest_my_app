import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfoModule } from './user_info_modules';

@Module({
    imports: [UserInfoModule],
    exports: [UserInfoModule],
})
export class Entities{}