import { Injectable } from '@nestjs/common';
import { RepositoryPort } from '../../../core/ports/repository.ports';
import { ProductEntity, ProductProps } from '../domain/entities/product.entity';

@Injectable()
class ProductRepository
  implements RepositoryPort<ProductEntity, ProductProps> {}
