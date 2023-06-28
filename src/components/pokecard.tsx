import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Chip from '@mui/material/Chip';
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import ScaleIcon from '@mui/icons-material/Scale';
import { usePokemon } from "./../hooks/usePokemon";

interface Props {
  url: string;
  handleOpen: () => void;
}

export const PokeCard = ({ url, handleOpen}: Props) => {
  const { pokemon } = usePokemon(url);

  const ShowModal = () => {
    localStorage.setItem('idPoke', ""+pokemon?.id+"");
    handleOpen();
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200, backgroundSize: "200px 200px" }}
        image={pokemon?.sprites?.other?.dream_world?.front_default || pokemon?.sprites?.front_default}
        title={pokemon?.name}
        component='div'
      />
      <Badge badgeContent={pokemon?.id} color="primary" max={9999}>
        <CatchingPokemonIcon color="action" />
      </Badge>
      <Chip sx={{marginLeft: "60%"}} icon={<ScaleIcon />} label={pokemon?.weight} color="success" size="small"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon?.name}
        </Typography>
        {pokemon?.moves?.slice(0, 2).map(({ move: { name } }) => {
            return (

                <span key={name}>#{name} </span>
            )
        })}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={ShowModal}>Ver más</Button>
      </CardActions>
    </Card>
  );
};
