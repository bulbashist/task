import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import CategoryPage from "./pages/category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category/:search" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
