import { QueryParams, RepositoryPort } from '../ports/repository.ports';

export abstract class FileRepositoryBase<Entity, EntityProps>
  implements RepositoryPort<Entity, EntityProps> {
  delete(entity: Entity): Promise<Entity> {
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
    return Promise.resolve(undefined);
  }

  saveMultiple(entities: Entity[]): Promise<Entity[]> {
    return Promise.resolve([]);
  }
}
