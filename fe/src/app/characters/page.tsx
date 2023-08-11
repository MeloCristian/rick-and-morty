"use client";
import "./character.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";

const GET_CHARACTERS = gql`
  query Characters($page: Int!) {
    result(page: $page) {
      characters {
        name
        image
        id
        species
      }
      pages
    }
  }
`;

export default function Characters() {
  let [characters, setCharacters] = useState([]);
  let [pages, setPages] = useState(0);
  let [page, setPage] = useState(1);
  useEffect(() => {
    const client = getClient();
    client
      .query({
        query: GET_CHARACTERS,
        variables: {
          page,
        },
      })
      .then(({ data }: any) => {
        return data.result;
      })
      .then(({ characters, pages }) => {
        setPages(pages);
        setCharacters(characters);
      });
    console.log("pasa");
  }, [page, characters]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <main>
      <Stack spacing={2}>
        <Pagination
          count={pages}
          onChange={handleChange}
          style={{ width: "fit-content", margin: "auto" }}
          className="pagination"
          color="primary"
        />
      </Stack>
      <div className="main-container">
        {characters.map((character: any) => {
          return (
            <Card
              sx={{ maxWidth: 345, minWidth: 345, padding: "1rem" }}
              key={character.id}
            >
              <CardMedia
                sx={{
                  maxWidth: 280,
                  margin: "0 auto",
                  padding: "0.1em",
                  height: 270,
                }}
                image={character.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Id: {character.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Especie: {character.species}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
