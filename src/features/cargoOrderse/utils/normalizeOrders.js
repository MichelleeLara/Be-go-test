export const normalizeOrder = (data, source) => {
    const order = data[0];
  if (source === "orders") {
    return {
      id: order._id,
      orderNumber: order.order_number,
      status: order.status,
      statusClass: order.status_string || "",
      pickup: {
        route: order.route.route,
        address: order.destinations?.[0]?.address || "N/A",
        startDate: order.destinations?.[0]?.startDate || 0,
        endDate: order.destinations?.[0]?.endDate || 0,
      },
      dropoff: {
        route: order.route.dropoff,
        address: order.destinations?.[1]?.address || "N/A",
        startDate: order.destinations?.[1]?.startDate || 0,
        endDate: order.destinations?.[1]?.endDate || 0,
      },
      status_list:order.status_list.pickup,
      driver: order.driver,
      type: order.cargo?.type || "Unknown",
      driverThumbnail: order.driver?.thumbnail || null,
      dirver: order.dirver,
    };
  } else if (source === "upcoming") {
      return data.map((order) => ({
        orderNumber: order.order_number,
        id: order._id,
        status: order.status,
        statusText: order.status_string || "Unknown Status",
        statusClass: order.status_class || "default-class",
        pickup: {
          address: order.destinations?.[0]?.address || "N/A",
          startDate: order.destinations?.[0]?.start_date || 0,
          endDate: order.destinations?.[0]?.end_date || 0,
        },
        dropoff: {
          address: order.destinations?.[1]?.address || "N/A",
          startDate: order.destinations?.[1]?.start_date || 0,
          endDate: order.destinations?.[1]?.end_date || 0,
        },
        type: order.type || "Unknown",
        driverThumbnail: order.driver_thumbnail || null,
      }));
  }
};
