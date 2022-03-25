import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
