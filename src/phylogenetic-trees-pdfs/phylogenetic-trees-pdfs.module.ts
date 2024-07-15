import { Module } from '@nestjs/common';
import { PhylogeneticTreesPdfsService } from './phylogenetic-trees-pdfs.service';
import { PhylogeneticTreesPdfsController } from './phylogenetic-trees-pdfs.controller';

@Module({
  controllers: [PhylogeneticTreesPdfsController],
  providers: [PhylogeneticTreesPdfsService],
})
export class PhylogeneticTreesPdfsModule {}
