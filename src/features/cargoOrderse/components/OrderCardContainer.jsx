import PropTypes from "prop-types";
import OrderCard from "./OrderCard";

const OrderCardContainer = ({ order }) => {
  const handleStartPickup = () => {
    console.log(`Pickup iniciado para la orden ${order.orderNumber}`);
  };


  return (
    <OrderCard
      orderNumber={order.orderNumber}
      type={order.type}
      status={order.status}
      statusClass={order.statusClass}
      pickup={order.pickup}
      dropoff={order.dropoff}
      driverThumbnail={order.driverThumbnail}
      id={order.id}
      onStartPickup={handleStartPickup}
    />
  );
};

OrderCardContainer.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    orderNumber: PropTypes.string.isRequired,
    type: PropTypes.string,
    status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    statusClass: PropTypes.string,
    pickup: PropTypes.shape({
      route: PropTypes.string,
      address: PropTypes.string,
      startDate: PropTypes.number,
      endDate: PropTypes.number,
    }),
    dropoff: PropTypes.shape({
      route: PropTypes.string,
      address: PropTypes.string,
      startDate: PropTypes.number,
      endDate: PropTypes.number,
    }),
    driverThumbnail: PropTypes.string,
  }).isRequired,
};

export default OrderCardContainer;
