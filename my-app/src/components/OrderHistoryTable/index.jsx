import React from "react";

import orderHistory from "../config/order-history.json";
import historyTitle from "../config/history-title.json";

const OrderHistoryTable = () => (
  <table border="1px solid black ">
    <tbody>
      <tr>
        {historyTitle.map(item => (
          <th key={item.title}>{item.title}</th>
        ))}
      </tr>
      {orderHistory.map(item => (
        <tr key={item.id}>
          <td>{item.date}</td>
          <td>{item.price}</td>
          <td>{item.address}</td>
          <td>{item.rating}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default OrderHistoryTable;
