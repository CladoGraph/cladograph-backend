import { Test, TestingModule } from '@nestjs/testing';
import { PhylogeneticTreesPdfsController } from './phylogenetic-trees-pdfs.controller';
import { PhylogeneticTreesPdfsService } from './phylogenetic-trees-pdfs.service';

describe('PhylogeneticTreesPdfsController', () => {
  let controller: PhylogeneticTreesPdfsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhylogeneticTreesPdfsController],
      providers: [PhylogeneticTreesPdfsService],
    }).compile();

    controller = module.get<PhylogeneticTreesPdfsController>(PhylogeneticTreesPdfsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
