import { useState, useEffect } from "react";
import { Wagon, Eye } from "@/icons/Icons";
import PropTypes from "prop-types";
import PickupInfo from "./PickUpInfo";
import DropoffInfo from "./DropOffInfo";
import { formatDate, formatTime, calculateTimeLeft } from "../utils/dateUtils";
import { useNavigate } from "react-router-dom";

const OrderCard = ({
  orderNumber,
  type,
  status,
  statusClass,
  pickup,
  dropoff,
  id,
  onStartPickup,
}) => {
  const [canPickUp, setCanPickUp] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const updateCountdown = () => {
      const remainingTime = calculateTimeLeft(1769299200000); // Cambiarlo por pickup.startDate 
      if (remainingTime === "00:00:00") {
        setCanPickUp(true);
        setTimeLeft("00:00:00");
      } else {
        setCanPickUp(false);
        setTimeLeft(remainingTime);
      }
    };
  
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
  
    return () => clearInterval(timer);
  }, [pickup.startDate]);

  const handleViewDetails = () => {
    navigate(`/cargoDetails/${id}`);
  };

  return (
    <aside className="mt-5 flex flex-col gap-6">
      <p className="text-[#969798] text-sm font-semibold">
        Order <span className="text-white">#{orderNumber}</span>
      </p>
      <div className="gradient-box rounded-2xl">
        {/* Header Order */}
        <header className="py-2.5 px-4 flex justify-between border-b border-[#2c2c2c] pb-4 font-semibold">
          <div className="flex items-center gap-2 text-sm">
            <Wagon />
            <h2>{type}</h2>
          </div>
          <div className="flex items-center gap-2 text-xs mr-2">
            <div className={`w-[10.03px] h-[10.03px] rounded-full ${statusClass}`}></div>
            <p>{status}</p>
          </div>
        </header>

        {/* Data Order */}
        <main className="pt-7 px-4 flex gap-7 flex-col">
          {/* PickUp */}
          <PickupInfo
            location={pickup.route }
            address={pickup.address}
            date={formatDate(pickup.startDate)}
            time={formatTime(pickup.startDate)}
          />

          {/* DropOff */}
          <DropoffInfo
            location={dropoff.route}
            address={dropoff.address}
            date={formatDate(dropoff.startDate)}
            time={formatTime(dropoff.startDate)}
          />
        </main>

        {/* Buttons */}
        <div className="flex items-center justify-between text-sm text-black font-semibold mt-6 gap-5">
          <button
            disabled={!canPickUp}
            onClick={onStartPickup}
            className={`${
              canPickUp
                ? "bg-[#ffee00] cursor-pointer"
                : "bg-transparent border rounded-full  rounded-tl-none text-white font-semibold border-[#2c2c2c]"
            } rounded-full py-2 text-xs w-full`}
          >
            {canPickUp ? (
              "It's time for pickup"
            ) : (
              <p>
                Start pickup in <span className="text-[#ffee00]">{timeLeft}</span>
              </p>
            )}
          </button>
          <button onClick={handleViewDetails}  className="flex items-center cursor-pointer gap-5 bg-[#ffee00] rounded-full rounded-tr-none py-2 text-xs px-4">
            Resume
            <Eye />
          </button>
        </div>
      </div>
    </aside>
  );
};

OrderCard.propTypes = {
  orderNumber: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Acepta string o number
  statusClass: PropTypes.string.isRequired,
  pickup: PropTypes.shape({
    address: PropTypes.string,
    route: PropTypes.string, // Hacerlo opcional
    startDate: PropTypes.number,
    endDate: PropTypes.number,
  }).isRequired,
  dropoff: PropTypes.shape({
    address: PropTypes.string,
    route: PropTypes.string, // Hacerlo opcional
    startDate: PropTypes.number,
    endDate: PropTypes.number,
  }).isRequired,
  id: PropTypes.string.isRequired,
  onStartPickup: PropTypes.func.isRequired,
};


export default OrderCard;
