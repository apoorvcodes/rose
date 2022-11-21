import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class Petals {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
