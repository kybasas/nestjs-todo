import { RepositoryPort } from '../../../core/ports/repository.ports';
import { ProductEntity, ProductProps } from '../domain/entities/product.entity';

export interface ProductRepository
    extends RepositoryPort<ProductEntity, ProductProps> {
    findByNameOrException(name: string): Promise<ProductEntity>
}
