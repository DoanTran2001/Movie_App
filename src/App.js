import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css"
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Routes from "./config/Routes";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Route render={props => (
          <>
            <Header {...props}/>
            <Routes />
            <Footer />
          </>
        )} />
      </BrowserRouter>
    </div>
  );
}

export default App;
