import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { AppointmentModule } from './appointment/appointment.module';
import { ServiceModule } from './service/service.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [UserModule, AppointmentModule, ServiceModule, PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}