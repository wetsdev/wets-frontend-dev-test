import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import Stack from "@mui/material/Stack";
import { usePokemonById } from "./../hooks/usePokemonById.ts";

interface Props {
  id: string;
}

export const DetailPokemon = ({ id }: Props) => {

  const styleImg = {
    with: "150px",
    height: "150px",
  };

  const { pokemon } = usePokemonById(id);

  return (
    <div>
      <img
        style={styleImg}
        src={
          pokemon?.sprites?.other?.dream_world?.front_default ||
          pokemon?.sprites?.front_default
        }
        alt={pokemon?.name}
      />
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {pokemon?.name}
      </Typography>
      <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
        <Stack direction="row" spacing={1}>
          {pokemon?.types?.map(({ type: { name } }) => {
            return <Chip color="primary" key={name} label={name} />;
          })}
        </Stack>
        Stats
        {pokemon?.stats?.map(({ base_stat, stat: { name } }) => {
          return (
            <Stack direction="row" spacing={1} marginTop={2} key={name}>
              <Chip
                color="primary"
                variant="outlined"
                label={name + ": " + base_stat}
              />
            </Stack>
          );
        })}
      </Typography>
      </div>
  );
};
