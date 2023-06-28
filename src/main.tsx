import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Login} from "./pages";
import PokemonProvider from "./context/PokemonContext";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <PokemonProvider>
      <CssBaseline />
      <RouterProvider router={router}/>
    </PokemonProvider>
);
