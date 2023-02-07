import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail, Main } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:number" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
