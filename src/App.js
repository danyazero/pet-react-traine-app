import logo from './logo.svg';
import './App.css';
import {MenuContainer} from "./Components/Menu/MenuContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainContainer} from "./Components/Main/MainContainer";
import {SecondBarContainer} from "./Components/SecondBar/SecondBarContainer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <MenuContainer/>
            <SecondBarContainer/>
            <Routes>
                <Route path="/" element={<MainContainer/>}/>
            </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
