import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";

const App = () => {
  return (
    <div>
      <Routes>        
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/test3" element={<Test3 />} />
      </Routes>
    </div>
  );
};

export default App;
