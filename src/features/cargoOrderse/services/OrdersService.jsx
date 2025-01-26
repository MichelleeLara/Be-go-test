export const fetchOrders = async () => {
    const response = await fetch(
      "https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }
  
    const data = await response.json();
    const result = Array.isArray(data.result) ? data.result : [data.result];
    return result;
  };
