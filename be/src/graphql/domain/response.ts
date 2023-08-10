import { Field, ObjectType, InputType, ID, Int } from "type-graphql";
import { Character } from "./character";

@ObjectType()
export class ResponseData {
  @Field((type) => [Character])
  characters!: Character;

  @Field((type) => Int)
  pages!: number;
}
