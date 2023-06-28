import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { usePokemonById } from "./../hooks/usePokemonById.ts";
import { Chip } from "@mui/material";
import Stack from "@mui/material/Stack";

interface Props {
  id: any;
  handleClose: () => void;
  open: boolean;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const styleImg = {
  with: "150px",
  height: "150px",
};

export const ModalPoke = ({ id, handleClose, open }: Props) => {
  const { pokemon } = usePokemonById(id);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                return (<Chip color="primary" key={name} label={name} />);
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
        </Box>
      </Modal>
    </div>
  );
};
