import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SingsModule } from './sings/sings.module';
import { SongsService } from './songs/songs.service';
import { SongsController } from './songs/songs.controller';

@Module({
  imports: [SingsModule],
  controllers: [AppController, SongsController],
  providers: [AppService, SongsService],
})
export class AppModule {}
