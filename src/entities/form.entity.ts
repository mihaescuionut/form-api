import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('forms')
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  subject: string;

  @Column()
  message: string;
}
