import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import RouterApp from "./routes/RouterApp";
import Inicio from "./pages/Inicio";
import Head from "./components/Head";
import Page404 from "./pages/Page404";

function App() {

  return (
    <div>
      <Router>
      <Head />
        <Routes>
          
          <Route path="/*" 
            element={ 
              <ProtectedRoutes>
                <RouterApp />
              </ProtectedRoutes> 
            } 
          />

          <Route path="/" element={ <Inicio />} /> 
          <Route path="/login" element={ <Login />} />
          <Route path="/register" element={ <Register />} />
          <Route path="*" element={ <Page404 />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
