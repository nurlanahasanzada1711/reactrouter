import { RouterProvider, createBrowserRouter} from "react-router-dom";
import { ROUTES } from "./routes/routes.js";

const router = createBrowserRouter(ROUTES)

function App() {
  return (
   <>
 <RouterProvider router={{router}}/>
   </> 
  );
}

export default App;
