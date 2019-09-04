// tslint:disable: variable-name
import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne, RelationId } from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { Crop } from '../../crop/entities/crop.entity';

@Entity()
export class Dataset {
  @PrimaryColumn()
  id: number;

  @Column()
  public name: string;

  @Column()
  public code_name: string;

  @Column()
  public reference: string;

  @Column()
  public source_table: string;

  @Column()
  public table_name: string;

  @ManyToOne(type => Category)
  public category: Category;

  @RelationId((dataset: Dataset) => dataset.category)
  public category_id: number;

  @ManyToOne(type => Crop)
  public crop: Crop;

  @RelationId((dataset: Dataset) => dataset.crop)
  public crop_id: number;
}
