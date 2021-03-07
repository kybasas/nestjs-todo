import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Product', {})
export class AccountOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  price: string;
}
