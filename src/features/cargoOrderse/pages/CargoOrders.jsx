import { Header } from "@/components/Header";
import OrderCardContainer from "../components/OrderCardContainer";
import useOrders from "../hooks/useOrders";
import SearchEngine from "../components/SearchEngine";
import { useState } from "react";

const CargoOrders = () => {
  const { orders, ordersComing } = useOrders();
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [isSearching, setIsSearching] = useState(false); 


  const handleSearch = (query) => {
    if (!query) {
      setIsSearching(false);
      setFilteredOrders([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = [...orders, ...ordersComing].filter((order) =>
      order.orderNumber.toLowerCase().includes(lowerQuery)
    );
    setFilteredOrders(results);
    setIsSearching(true);
  };

  return (
    <section className="py-12 min-h-screen">
      <div className="mx-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <Header title="Orders" />
          <ul className="flex items-center gap-10 text-sm font-semibold">
            <li className="flex basis-0 grow">Upcoming</li>
            <li>Completed</li>
            <li className="flex basis-0 grow justify-around">Past</li>
          </ul>
        </div>

        {/* Search Engine */}
        <SearchEngine onSearch={handleSearch} />

        {/* Render Orders */}
        <aside className="mt-5 flex relative flex-col gap-6 sm:grid md:gap-10 sm:grid-cols-2 md:grid-cols-3">
          {isSearching ? (
            <>
              <h2 className="text-lg font-semibold absolute top-[-2rem]">Search Results</h2>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <OrderCardContainer key={order.id} order={order} />
                ))
              ) : (
                <p className="text-sm text-[#626161]">No orders found.</p>
              )}
            </>
          ) : (
            <>
              {orders.map((order) => (
                <OrderCardContainer key={order.id} order={order} />
              ))}

              {ordersComing.map((order) => (
                <OrderCardContainer key={order.id} order={order} />
              ))}
            </>
          )}
        </aside>
      </div>
    </section>
  );
};

export default CargoOrders;
