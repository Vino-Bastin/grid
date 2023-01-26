import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./Theme/Theme";

import Home from "./Pages/Home";
import Grid from "./Pages/Grid";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grid" element={<Grid />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
