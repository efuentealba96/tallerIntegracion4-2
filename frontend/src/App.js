import "./App.css";
import "./components/arround";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ShowUser from "./components/ShowUser";
import DocumentPage from "./components/document";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/user" element={<ShowUser />} />
          <Route path="/doc" element={<DocumentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
