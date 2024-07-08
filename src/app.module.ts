import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhylogeneticTreeScriptsModule } from './modules/phylogenetic-tree-scripts/phylogenetic-tree-scripts.module';
import { UsersModule } from './modules/users/users.module';
import { CommonsModule } from './commons/commons.module';

@Module({
  imports: [CommonsModule, PhylogeneticTreeScriptsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
