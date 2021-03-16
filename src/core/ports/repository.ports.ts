import { DeepPartial } from 'typeorm';

export type QueryParams<EntityProps> = DeepPartial<EntityProps>;

export interface Save<Entity> {
  save(entity: Entity): Promise<Entity>;
}

export interface SaveMultiple<Entity> {
  saveMultiple(entities: Entity[]): Promise<Entity[]>;
}

export interface FindOne<Entity, EntityProps> {
  findOneOrThrow(params: QueryParams<EntityProps>): Promise<Entity>;
}

export interface FindOneById<Entity> {
  findOneByIdOrThrow(id: string): Promise<Entity>;
}

export interface FindMany<Entity, EntityProps> {
  findMany(params: QueryParams<EntityProps>): Promise<Entity[]>;
}

export interface OrderBy {
  [key: number]: -1 | 1;
}

export interface DeleteOne<Entity> {
  delete(entity: Entity): Promise<Entity>;
}

export interface RepositoryPort<Entity, EntityProps>
  extends Save<Entity>,
    FindOne<Entity, EntityProps>,
    FindOneById<Entity>,
    FindMany<Entity, EntityProps>,
    DeleteOne<Entity>,
    SaveMultiple<Entity> {}
