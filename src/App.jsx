import { Route, Routes } from "react-router-dom";
import CargoOrders from "@/features/cargoOrderse/pages/CargoOrders";
import CargoDetails from "@/features/cargoOrderse/pages/CargoDetails";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CargoOrders />} />
      <Route path="/cargoDetails/:id" element={<CargoDetails />} />
    </Routes>
  );
};

export default App;
