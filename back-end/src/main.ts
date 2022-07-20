
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as cookieParser from 'cookie-parser';
import * as pg from 'pg';

async function bootstrap() {
  const pgPool = new pg.Pool({
    // host: 'postgres',
    database: 'db',
    user: 'kev_ye',
    port: 5432,
    password: '',
  });
  const MAX_AGE: number = 60 * 60 * 24 * 1000; // one day
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.setGlobalPrefix('api');
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap().then();