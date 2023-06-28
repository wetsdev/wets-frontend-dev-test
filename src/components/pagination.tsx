import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface Props {
    page: number;
    handleChange: any;
  }

export const PaginationL = ({page, handleChange}: Props) => {


  return (

      <Stack spacing={2}>
        <Pagination
          count={100}
          color="primary"
          size="medium"
          page={page} 
          onChange={handleChange}
          sx={{ margin: "auto", paddingTop: 5, paddingBottom: 3 }}
        />
      </Stack>

  );
};
