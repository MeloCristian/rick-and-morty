// users.schema.ts
import { Field, ObjectType, InputType, ID } from "type-graphql";

@ObjectType()
export class Character {
  @Field((type) => ID)
  id!: number;

  @Field()
  name!: string;

  @Field()
  status!: string;

  @Field()
  species!: string;

  @Field()
  type!: string;

  @Field()
  gender!: string;

  @Field()
  image!: string;

  @Field()
  created!: string;
}
