import Modal from "@mui/material/Modal";
import { DetailPokemon } from "./detail.tsx";
import Box from "@mui/material/Box";

interface Props {
  id: string;
  handleClose: () => void;
  open: boolean;
}

export const ModalPoke = ({ id, handleClose, open }: Props) => {

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

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <DetailPokemon id={id} />
      </Box>
      </Modal>
    </div>
  );
};
