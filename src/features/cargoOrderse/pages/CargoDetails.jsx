import { useState } from "react";
import { useParams } from "react-router-dom";
import useOrders from "../hooks/useOrders";
import { formatDate, formatTime } from "../utils/dateUtils";
import { Header } from "@/components/Header";
import { Check, ChevronUp, TrailerId } from "@/icons/Icons";

const CargoDetails = () => {
  const { id } = useParams();
  const { orders, ordersComing } = useOrders();
  const [showDropoffDetails, setShowDropoffDetails] = useState(false);


  const orderDetails =
    orders.find((order) => order.id === id) ||
    ordersComing.find((order) => order.id === id);

  if (!orderDetails)
    return (
      <div className="flex flex-col min-h-screen justify-center items-center gap-3">
        <div className="w-6 h-6 border-4 border-t-[#ffee00] border-[#2c2c2c] rounded-full animate-spin"></div>
        <p className=" bg-[#080c0f] text-center flex items-center justify-center">
          Cargando datos{" "}
        </p>
      </div>
    );

  const { orderNumber, pickup, dropoff } = orderDetails;

  const toggleDropoffDetails = () => {
    setShowDropoffDetails((prev) => !prev);
  };


  return (
    <section className="flex flex-col gap-6">
      <div className="mx-6 pb-12 mt-5 flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <Header title="Orders" />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-6 md:place-items-center">
          {/* Order Card */}
          <div className="gradient-box rounded-2xl py-6 mt-4 md:h-fit">
            <header className="px-12 flex justify-between font-semibold">
              <div className="flex flex-col items-center gap-2 text-sm">
                <p>
                  Referencia <span>A1220</span>
                </p>
                <p className="text-[#969798] text-sm font-semibold">
                  Order <span className="text-white">#{orderNumber}</span>
                </p>
              </div>
            </header>

            {/* Pickup and Dropoff */}
            <main className="pt-7 px-12 flex gap-8 flex-col">
              {/* Pickup */}
              <div className="flex items-end justify-between w-full">
                <div className="flex items-start gap-5">
                  <div className="min-w-[40px] flex items-center justify-center relative">
                    <div className="border border-[#ffee00] rounded-full p-1">
                      <div className="bg-[#ffee00] rounded-full text-black p-0.5 w-7 h-7 flex items-center justify-center">
                        <TrailerId />
                      </div>
                    </div>
                  </div>
                  <div className="font-semibold">
                    <p className="text-[10px] uppercase font-semibold text-[#535455]">
                      Pickup
                    </p>
                    <h3 className="text-sm">{pickup.route || "New York"}</h3>
                    <p className="text-[#535455] text-xs line-clamp-1 max-w-[210px]">
                      {pickup.address || "No address available"}
                    </p>
                    <div className="flex items-center mt-2 py-1 px-2 bg-[#16191CFE] text-xs text-[#868889] gap-2 rounded-full w-fit">
                      <div className="w-2 h-2 bg-[#0C7DED] rounded-full"></div>
                      <p>Accepted</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dropoff */}
              <div
                onClick={toggleDropoffDetails}
                className="flex items-end justify-between w-full cursor-pointer"
              >
                <div className="flex items-end gap-5">
                  <div className="min-w-[40px] flex items-center justify-center relative">
                    <div className="h-[6rem] top-[-7.2rem] w-[.9px] bg-gradient-to-t from-[#0F1315] to-[#D9D9D9] rounded-full absolute"></div>
                    <div className="w-7 h-7 bg-[#0e151a] rounded-full flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full border border-[#26333C]"></div>
                    </div>
                  </div>
                  <div className="font-semibold">
                    <p className="text-[10px] uppercase font-semibold text-[#535455]">
                      Dropoff
                    </p>
                    <h3 className="text-sm">{dropoff.route || "New York"}</h3>
                    <p className="text-[#535455] text-xs line-clamp-1 max-w-[210px]">
                      {dropoff.address || "No address available"}
                    </p>
                    <div className="flex items-center mt-2 py-1 px-2 bg-[#16191CFE] text-xs text-[#EDEDED] gap-2 rounded-full w-fit">
                      <div className="w-2 h-2 bg-[#D9D9D980] rounded-full"></div>
                      <p>on hold</p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>

          {/* Status List */}
          <div className="gradient-box relative rounded-2xl pt-28 mt-16">
            <div className="absolute top-[-3rem] flex flex-col items-center justify-center w-full">
              <img src="/avatar.png" alt="" className="w-20" />
              <p className="mt-4 font-semibold text-lg">
                {formatTime(pickup.startDate)}
              </p>
            </div>
            <div className="pb-12 px-12 flex flex-col gap-7">
              {orders[0].status_list.map((status, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div
                    className={`p-1 z-30 rounded-full w-fit relative flex items-center justify-center ${
                      status.active ? "bg-[#ffee00]" : "bg-[#393c3e]"
                    }`}
                  >
                    {status.active ? (
                      <Check />
                    ) : (
                      <div className="w-[18px] h-[18px]  bg-[#898a8b] rounded-full flex items-center justify-center">
                        <div className="bg-[#d9d9d9] w-[6px] h-[6px] rounded-full"></div>
                      </div>
                    )}
                    {index > 0 && (
                      <div
                        className={`absolute top-[-1.75rem] z-10 w-0.5 ${
                          status.active ? "bg-[#ffee00]" : "bg-[#555657]"
                        } h-[1.8rem]`}
                      ></div>
                    )}
                  </div>
                  <p>{status.status}</p>
                </div>
              ))}
            </div>
            <button className="w-full bg-[#ffee00] py-7 text-lg text-center rounded-2xl text-black font-semibold rounded-tl-none rounded-tr-none">
              Track Order
            </button>
          </div>

        </div>

        {/* Dropoff Details (Toggleable) */}
        {showDropoffDetails && (
          <>
            <div className="mt-4 bg-[#16191C] p-4 rounded-2xl flex items-center justify-between border text-white font-semibold border-[#2c2c2c]">
              <h4 className="text-sm font-semibold">Pickup Data</h4>
              <button onClick={toggleDropoffDetails} className="cursor-pointer">
                <ChevronUp />

              </button>
            </div>
            <p className="text-sm text-white font-semibold mt-5">{dropoff.address}</p>
            <div className="flex items-center gap-8">
              <p className="text-sm text-white font-semibold">
                {formatDate(dropoff.startDate)}
              </p>
              <p className="text-sm text-white font-semibold">
                {formatTime(dropoff.startDate)}
              </p>
            </div>
            <p className="text-sm text-white font-semibold">
              {orders[0].driver.raw_telephone}
            </p>
            <p className="text-sm text-white font-semibold">{orders[0].driver.email}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default CargoDetails;
