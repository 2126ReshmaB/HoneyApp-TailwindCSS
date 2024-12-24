import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductOverview from "./pages/ProductOverview";

const App = () => (
   <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/product-overview' element={<ProductOverview />}/>
   </Routes>
);
export default App;