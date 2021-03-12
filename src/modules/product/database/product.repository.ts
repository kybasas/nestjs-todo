import { Injectable } from '@nestjs/common';
import { RepositoryPort } from '../../../core/ports/repository.ports';
import { ProductEntity, ProductProps } from '../domain/entities/product.entity';

@Injectable()
class ProductRepositoryFiles
  implements RepositoryPort<ProductEntity, ProductProps> {}
