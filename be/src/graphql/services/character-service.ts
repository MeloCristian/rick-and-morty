import fetch from "node-fetch";
import { Character } from "../domain/character";

interface Data {
  id: string;
  info: Record<string, any>;
}

export default {
  async findCharacters(data: Record<string, any>): Promise<Character[] | any> {
    let { page } = data;
    return fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{
          characters(page: ${page}, filter: {species: "Human", }) {
            results {
              id
              name
              image
              species
              gender
            }
            info {
              pages
            }
          }
        }`,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((e) => {
        let characters = e.data.characters.results;
        const pages = e.data.characters.info.pages;
        characters = characters.filter((e: any) => e.species != "Humanoid");
        return { characters, pages };
      });
  },

  findCharacter(data: Data) {
    return {};
  },
};
