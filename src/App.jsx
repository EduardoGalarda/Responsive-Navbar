import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Item1 from "./pages/Item1";
import Item2 from "./pages/Item2";
import SubItem1 from "./pages/SubItem1";
import SubItem2 from "./pages/SubItem2";
import SubItem3 from "./pages/SubItem3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="item1" element={<Item1 />} />
          <Route path="item2" element={<Item2 />} />
          <Route path="subitem1" element={<SubItem1 />} />
          <Route path="subitem2" element={<SubItem2 />} />
          <Route path="subitem3" element={<SubItem3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
