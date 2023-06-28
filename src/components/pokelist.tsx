import * as React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { PokeCard } from "./pokecard";
import { ModalPoke } from "./../components/modal.tsx";

interface Props {
  pokemonsUrls?: string[] | null;
  page: number;
}

export const PokeList = ({ pokemonsUrls, page }: Props) => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {setOpen(true);};
  const handleClose = () => {setOpen(false)};

  const id = localStorage.getItem('idPoke');


  return (
    <Container maxWidth={false} sx={{ paddingTop: 5 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 20 }}>
          {pokemonsUrls?.slice((page - 1) * 10, (page - 1) * 10 + 10).map((pokemonUrl) => (
            <Grid item xs={2} sm={4} md={4} key={pokemonUrl}>
            <PokeCard key={pokemonUrl} url={pokemonUrl} handleOpen={handleOpen}/>
            </Grid>
          ))}
        </Grid>
      </Box>
      <ModalPoke id={id} handleClose={handleClose} open={open}/>
    </Container>
    
  );
}
