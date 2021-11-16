import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbconfig } from 'src/configs/db_config';
import { Entities } from 'src/entities/users/entities_module';
import { UsersController } from 'src/entities/users/user_controller';
import { UsersService } from 'src/entities/users/user_service';


@Module({
    imports: [TypeOrmModule.forRoot(dbconfig),Entities],
    controllers: [UsersController],
    providers: [UsersService],
})
export class DatabaseModule {}