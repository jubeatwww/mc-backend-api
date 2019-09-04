import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Dataset } from '../../dataset/entities/dataset.entity';

@Entity()
export class Crop {
  @PrimaryColumn()
  id: number;

  @Column()
  public name: string;

  @Column()
  // tslint:disable-next-line: variable-name
  public code_name: string;

  @OneToMany(type => Dataset, dataset => dataset.crop)
  datasets: Dataset[];
}
