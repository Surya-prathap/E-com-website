import { Routes, Route } from "react-router-dom";
import MensPage from "./pages/MensPage";
import HomePage from "./pages/HomePage";
import ShopNow from "./pages/ShopNow";

import WomensPage from "./pages/WomensPage";
import BagsPage from "./pages/BagsPage";
import KitchenPage from "./pages/Kitchen";
import SportsPage from "./pages/Sports";
import AccessoriesPage from "./pages/Accessories";
import ElectronicsPage from "./pages/Electronics";
import CurtainsPage from "./pages/Curtains";
import TowelsPage from "./pages/Towels";
import FootWarePage from "./pages/FootWare";
import CartProduct from "./components/CartProduct";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopNow />}></Route>
        <Route path="/cart" element={<CartProduct />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/mens" element={<MensPage />}></Route>
        <Route path="/bags" element={<BagsPage />}></Route>
        <Route path="/women" element={<WomensPage />}></Route>
        <Route path="/kitchen" element={<KitchenPage />}></Route>
        <Route path="/sports" element={<SportsPage />}></Route>
        <Route path="/accessories" element={<AccessoriesPage />}></Route>
        <Route path="/electronics" element={<ElectronicsPage />}></Route>
        <Route path="/curtains" element={<CurtainsPage />}></Route>
        <Route path="/towels" element={<TowelsPage />}></Route>
        <Route path="/foot" element={<FootWarePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
