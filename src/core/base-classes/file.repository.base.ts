import { QueryParams, RepositoryPort } from '../ports/repository.ports';
import {Logger} from "../ports/logger.port";
import {writeDataToFile} from "../../utils/writeDataToFile";

export abstract class FileRepositoryBase<Entity, EntityProps>
  implements RepositoryPort<Entity, EntityProps> {

  protected constructor(protected readonly logger: Logger,protected repository: any[],protected mapper: FileMapper<Entity>) { }

  async deleteById(id: string) {
    return Promise.resolve(undefined);
  }

  findMany(params: QueryParams<EntityProps>): Promise<Entity[]> {
    return Promise.resolve([]);
  }

  findOneByIdOrThrow(id: string): Promise<Entity> {
    return Promise.resolve(undefined);
  }

  findOneOrThrow(params: QueryParams<EntityProps>): Promise<Entity> {
    return Promise.resolve(undefined);
  }

   save(entity: Entity): Promise<Entity> {
    return new Promise((resolve, reject) => {
      this.repository.push(this.mapper.toFileEntity(entity))
      writeDataToFile('./data/products.json', this.repository);
      resolve(entity)
    })
    return Promise.resolve(undefined);
  }

  saveMultiple(entities: Entity[]): Promise<Entity[]> {
    return Promise.resolve([]);
  }
}
