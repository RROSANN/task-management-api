import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmCOnfig } from './config/typeorm.config';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: 
  [
    TasksModule,
    TypeOrmModule.forRoot(typeOrmCOnfig),
    AuthModule
  ],
})
export class AppModule {}
