import { Trailer } from "@/icons/Icons";
import PropTypes from "prop-types";

const PickupInfo = ({ location, address, date, time }) => (
  <div className="flex items-end justify-between w-full">
    <div className="flex items-center gap-3">
      <div className="min-w-[32px] flex items-center justify-center">
        <Trailer />
      </div>
      <div className="font-semibold">
        <p className="text-[10px] uppercase font-semibold text-[#535455]">
          Pickup
        </p>
        <h3 className="text-sm">{location || "Ney York"}</h3>
        <p className="text-[#535455] text-xs line-clamp-1 max-w-[210px]">
          {address || "No address available"}
        </p>
      </div>
    </div>
    <div className="font-semibold text-end">
      <p className="text-[#535455] text-xs">{date}</p>
      <p className="text-xs">{time}</p>
    </div>
  </div>
);

PickupInfo.propTypes = {
  location: PropTypes.string,
  address: PropTypes.string,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PickupInfo;
