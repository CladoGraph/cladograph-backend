import { Test, TestingModule } from '@nestjs/testing';
import { PhylogeneticTreesPdfsService } from './phylogenetic-trees-pdfs.service';

describe('PhylogeneticTreesPdfsService', () => {
  let service: PhylogeneticTreesPdfsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhylogeneticTreesPdfsService],
    }).compile();

    service = module.get<PhylogeneticTreesPdfsService>(PhylogeneticTreesPdfsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
