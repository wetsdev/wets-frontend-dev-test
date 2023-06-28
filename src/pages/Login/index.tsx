import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type LoginType = {
  username: string;
  password: string;
};

export const Login = () => {
  const navigate = useNavigate();
  const jwtlocal = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwtlocal) {
      navigate("/");
    }
  }, []);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [loginData, setLoginData] = React.useState<LoginType>({
    username: "",
    password: "",
  });

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    fetch("./backend-endpoint.json")
      .then((response) => response.json())
      .then((datos) => {
        let userback = datos.user;
        let passback = datos.password;
        let jwt = datos.jwtoken;
        if (loginData.username == userback && loginData.password == passback) {
          localStorage.setItem("jwt", jwt);
          navigate("/");
        } else {
          alert("Usuario o clave incorrecto");
        }
      });
  };

  return (
    <>
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
              <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
                Iniciar sesion
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  name="username"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="Email"
                  sx={{ mt: 2, mb: 1.5 }}
                  required
                  onChange={dataLogin}
                />
                <FormControl
                  sx={{ mt: 2, mb: 1.5 }}
                  variant="outlined"
                  fullWidth
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    onChange={dataLogin}
                  />
                </FormControl>

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mt: 1.5, mb: 3 }}
                >
                  Iniciar sesion
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
