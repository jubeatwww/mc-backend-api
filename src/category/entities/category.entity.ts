// tslint:disable: variable-name
import { Entity, Column, PrimaryColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Dataset } from '../../dataset/entities/dataset.entity';
import { ValueChain } from '../../value-chain/entities/value-chain.entity';

@Entity()
export class Category {
  @PrimaryColumn()
  id: number;

  @Column()
  public name: string;

  @Column()
  public code_name: string;

  @OneToMany(type => Dataset, dataset => dataset.category)
  datasets: Dataset[];

  @OneToOne(type => ValueChain)
  @JoinColumn({
    name: 'value_chain_id',
  })
  public valueChain: ValueChain;

}
