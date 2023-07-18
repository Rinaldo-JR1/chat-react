import Register from "./pages/register";
import "./style.scss"
import Login from "./pages/login";
import Home from "./pages/home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="login" element={<Login />} />
      <Route index path="register" element={<Register />} />
    </Routes>
  </BrowserRouter>)
  // return (<Login />)
  // return (<Home />)
}

export default App;
