import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhylogeneticTreeScriptsModule } from './phylogenetic-tree-scripts/phylogenetic-tree-scripts.module';
import { UsersModule } from './users/users.module';
import { CommonsModule } from './commons/commons.module';
import { PasswordHasherService } from './modules/password-hasher/password-hasher.service';
import { JwtModule } from '@nestjs/jwt';
import { PhylogeneticTreesPdfsModule } from './phylogenetic-trees-pdfs/phylogenetic-trees-pdfs.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '14d',
      },
    }),
    CommonsModule,
    PhylogeneticTreeScriptsModule,
    UsersModule,
    PhylogeneticTreesPdfsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PasswordHasherService],
})
export class AppModule {}
