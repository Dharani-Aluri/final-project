import "./App.css";
import RestaurantList from "./RestaurantList";
import Menu from "./Menu";
import OrderSummary from "./OrderSummary";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<RestaurantList />} />
            <Route path="/restaurant" element={<RestaurantList />}>
                <Route path=":restaurantId" element={<Menu />} />
            </Route>
            <Route path="/order" element={<OrderSummary />} />
            <Route path="*" element={<p>Uh oh, that page doesn't exist</p>} />
        </Routes>
    );
}

export default App;
