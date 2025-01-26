import { Location } from "@/icons/Icons";
import PropTypes from "prop-types";

const DropoffInfo = ({ location, address, date, time }) => (
  <div className="flex items-end justify-between w-full">
    <div className="flex items-center gap-3">
      <div className="min-w-[32px] flex items-center justify-center relative">
        <div className="h-[2.5rem] top-[-3rem] w-[.9px] bg-gradient-to-t from-[#0F1315] to-[#D9D9D9] rounded-full absolute"></div>
        <Location />
      </div>
      <div className="font-semibold">
        <p className="text-[10px] uppercase font-semibold text-[#535455]">
          Dropoff
        </p>
        <h3 className="text-sm">{location || "Ney York"}</h3>
        <p className="text-[#535455] text-xs line-clamp-1 max-w-[210px]">
          {address || "No address available"}
        </p>
      </div>
    </div>
    <div className="font-semibold text-end flex justify-end items-end flex-col h-full">
      <p className="text-[#535455] text-xs">{date}</p>
      <p className="text-xs">{time}</p>
    </div>
  </div>
);

DropoffInfo.propTypes = {
  location: PropTypes.string,
  address: PropTypes.string,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default DropoffInfo;
