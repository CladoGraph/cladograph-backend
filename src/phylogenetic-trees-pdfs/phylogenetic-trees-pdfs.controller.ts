import { Controller } from '@nestjs/common';
import { PhylogeneticTreesPdfsService } from './phylogenetic-trees-pdfs.service';

@Controller('phylogenetic-trees-pdfs')
export class PhylogeneticTreesPdfsController {
  constructor(
    private readonly phylogeneticTreesPdfsService: PhylogeneticTreesPdfsService,
  ) {}
}
