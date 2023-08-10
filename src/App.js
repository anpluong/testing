import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import App1 from "./App1";
import App2 from "./App2";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/start/:user" element={<Main />} />
        <Route path="/app1" element={<App1 />} />
        <Route path="/app2" element={<App2 />} />
        <Route path="/" element={<App2 />} />
      </Routes>
    </div>
  );
};

export default App;
