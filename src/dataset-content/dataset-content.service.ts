import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';

@Injectable()
export class DatasetContentService {
  async getContent(ref, dataset) {
    const manager = getManager();
    let queryString = `SELECT "${dataset}"."year", "${dataset}"."value"`;

    const relations = {
      area: ['id', 'code', 'name', 'code_name'],
      year: ['id', 'name'],
      unit: ['id', 'name', 'code_name'],
      flag: ['id', 'name', 'code_name'],
    };

    Object.keys(relations).forEach((key) => {
      const columns = relations[key];
      columns.forEach((col) => {
        queryString = `${queryString}, "${key}"."${col}" AS "${key}__${col}"`;
      });
    });
    queryString = `${queryString} FROM "${ref}"."${dataset}" "${dataset}"`;
    Object.keys(relations).forEach((relation) => {
      queryString = `${queryString} LEFT JOIN "public"."${relation}" "${relation}" ON "${relation}"."id"="${dataset}"."${relation}_id"`;
    });

    const result = await manager.query(queryString);

    return result.map(r => {
      Object.keys(relations).forEach((key) => {
        const columns = relations[key];
        r[key] = {};
        columns.forEach((col) => {
          r[key][col] = r[`${key}__${col}`];
          delete r[`${key}__${col}`];
        });
      });
      return r;
    });
  }
}
