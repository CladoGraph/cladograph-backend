import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import { MyDocument } from './doc';

export default class PhylogeneticPdfGenerator {
  constructor() {}

  public generatePdf() {
    ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
  }
}
const phylogeneticPdfGenerator = new PhylogeneticPdfGenerator();

phylogeneticPdfGenerator.generatePdf();
