import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  );
}

export default App;
