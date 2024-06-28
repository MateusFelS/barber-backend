import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';
import { AppointmentModule } from './appointment/appointment.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cpvagntumphs73c96j90-a',
      port: 5432,
      username: 'bd_barber_user',
      password: 'o6Ea5KctTp8I33El43brdi4VY5Q3EHbU',
      database: 'bd_barber',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    UserModule, 
    AppointmentModule, 
    ServiceModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
