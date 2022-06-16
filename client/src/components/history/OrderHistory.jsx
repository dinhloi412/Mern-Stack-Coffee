import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import "./OrderHistory.css";
const OrderHistory = () => {
  const state = useContext(GlobalState);
  const [history] = state.UserAPI.history;
  const [isAdmin] = state.UserAPI.isAdmin;
  return (
    <div className="container mt-10">
      {isAdmin ? (
        <>
          <h2 className="history__heading">Quản lý đơn hàng</h2>
          <h4 className="history__count">Tổng số đơn hàng {history.length}</h4>
        </>
      ) : (
        <>
          <h2 className="history__heading">LỊCH SỬ MUA HÀNG</h2>
          <h4 className="history__count">
            Bạn đã mua {history.length} đơn hàng
          </h4>
        </>
      )}
      <div className="group-checkout history">
        <div className="checkout-table p-1">
          <table>
            <thead>
              <tr>
                <th>PAYMENT ID</th>
                <th>Ngày mua</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr className="history__column" key={item._id}>
                  <td>{item._id}</td>
                  <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                  <td>
                    <Link
                      className="history__text--detail"
                      to={`/history/${item._id}`}
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
