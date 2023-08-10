import "reflect-metadata";
import { Arg, ID, Int, Query, Resolver } from "type-graphql";
import { Character } from "../domain/character";
import { ResponseData } from "../domain/response";
import characterService from "../services/character-service";

@Resolver(() => Character)
export class CharactersResolver {
  @Query(() => ResponseData)
  async result(
    @Arg("page", (type) => Int) page: number
  ): Promise<ResponseData> {
    return characterService.findCharacters({ page: page });
  }

  @Query(() => Character)
  async character(
    @Arg("id", (type) => ID) id: string
  ): Promise<Character | undefined> {
    return undefined;
  }
}
