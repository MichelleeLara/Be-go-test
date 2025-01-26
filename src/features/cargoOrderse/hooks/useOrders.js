import { useState, useEffect } from "react";
import { fetchOrders } from "../services/OrdersService";
import { fetchOrdersUpComing } from "../services/OrdersServiceUpComing";
import { normalizeOrder } from "../utils/normalizeOrders";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [ordersComing, setOrdersComing] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const currentOrdersRaw = await fetchOrders();
        const upcomingOrdersRaw = await fetchOrdersUpComing();

        
        const normalizedOrders = normalizeOrder(currentOrdersRaw, "orders");
        const normalizedUpcomingOrders = normalizeOrder(upcomingOrdersRaw, "upcoming");


        setOrders(normalizedOrders ? [normalizedOrders] : []);
        setOrdersComing(normalizedUpcomingOrders || []);

      } catch (err) {
        console.error("Error fetching orders:", err.message);
        setError(err.message);
      }
    };

    fetchAllOrders();
  }, []);

  return { orders, ordersComing, error };
};

export default useOrders;
