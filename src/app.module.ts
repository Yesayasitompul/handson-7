import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SingsModule } from './sings/sings.module';
import { SongsService } from './songs/songs.service';
import { SongsController } from './songs/songs.controller';
import { LoggerMiddleware } from './songs/logger.middleware';

@Module({
  imports: [SingsModule],
  controllers: [AppController, SongsController],
  providers: [
    {
      provide: AppService,
      useClass: AppService,
    },
    AppService, SongsService
  ],
})
export class AppModule  implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('songs'); 
  }
}
