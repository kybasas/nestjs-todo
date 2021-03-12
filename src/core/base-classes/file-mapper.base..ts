class FileMapper<Entity> {
    constructor( private entityConstructor: new (...args: any[]) => Entity) {

    }

    toFileEntity(entity: Entity) {
        return {
            ...entity,
            _id: Date.now(),
            createdAt: Date.now(),
            updatedAt: Date.now(),
        }
    }
}