// tslint:disable: variable-name
import { Entity, Column, PrimaryColumn, OneToMany, RelationId } from 'typeorm';

@Entity()
export class ValueChain {
  @PrimaryColumn()
  id: number;

  @Column()
  public name: string;

  @Column()
  public code_name: string;
}
