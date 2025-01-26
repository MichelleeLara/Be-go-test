import { MagnifyingGlass } from "@/icons/Icons";
import PropTypes from "prop-types";

const SearchEngine = ({ onSearch }) => {
  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    onSearch(value);
  };

  return (
    <div className="flex items-center gap-3 border-b border-[#2C2C2C] pb-1.5">
      <MagnifyingGlass />
      <input
        type="text"
        className="placeholder:text-xs placeholder:text-[#626161] text-white bg-transparent outline-none w-full"
        placeholder="Write your order number"
        onChange={handleInputChange}
      />
    </div>
  );
};

SearchEngine.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchEngine;
