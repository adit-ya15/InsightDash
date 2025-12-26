import React, { useMemo, useContext } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./single.scss"
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'
import { useLocation, useParams } from "react-router-dom";
import { notificationRows } from "../../datatablesource";
import { UserContext } from "../../context/userContext";
import { ProductContext } from "../../context/ProductContext";
import { OrderContext } from "../../context/OrderContext";
import { DeliveryContext } from "../../context/DeliveryContext";

import { useLanguage } from "../../context/LanguageContext";
import { AuthContext } from "../../context/AuthContext";

const Single = () => {
  const location = useLocation();
  const { currentUser } = useContext(AuthContext);
  const isUserRole = currentUser?.role === "user";
  const { userId, productId, notificationId } = useParams();
  const path = location.pathname.split("/")[1];
  const { t } = useLanguage();

  const { orderId, deliveryId } = useParams();
  const id = userId || productId || notificationId || orderId || deliveryId;

  const { data: userData } = useContext(UserContext);
  const { data: productData } = useContext(ProductContext);
  const { data: orderData } = useContext(OrderContext);
  const { data: deliveryData } = useContext(DeliveryContext);

  const dataItem = useMemo(() => {
    if (path === "users") {
      return userData.find(item => String(item.id) === String(id));
    } else if (path === "products") {
      return productData.find(item => String(item.id) === String(id));
    } else if (path === "orders") {
      return orderData.find(item => String(item.id) === String(id));
    } else if (path === "delivery") {
      return deliveryData.find(item => String(item.id) === String(id));
    } else if (path === "notifications") {
      return notificationRows.find(item => String(item.id) === String(id));
    }
  }, [path, id, userData, productData, orderData, deliveryData]);

  const isUser = path === "users";
  const isNotification = path === "notifications";
  const isOrder = path === "orders";
  const isDelivery = path === "delivery";

  if (!dataItem) {
    return (
      <div className='single'>
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div style={{ padding: "20px" }}>{t("single_item_not_found")}</div>
        </div>
      </div>
    );
  }

  let title;
  if (isUser) title = t("single_title_user");
  else if (isNotification) title = t("single_title_notification");
  else if (isOrder) title = t("single_title_order");
  else if (isDelivery) title = t("single_title_delivery");
  else title = t("single_title_product");

  let img;
  if (isUser) {
    img = dataItem.img || "https://images.pexels.com/photos/29823666/pexels-photo-29823666.jpeg";
  } else if (isNotification) {
    img = "https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
  } else if (isOrder) {
    img = dataItem.img || "https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"; // Generic order/box img
  } else if (isDelivery) {
    img = dataItem.img || "https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"; // truck
  } else {
    img = dataItem.img || "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500";
  }

  const name = isUser ? dataItem.username : (isNotification ? dataItem.type : (isOrder || isDelivery ? dataItem.product : dataItem.title));

  return (
    <div className='single'>
      {!isUserRole && <Sidebar />}
      <div className="singleContainer">
        <Navbar />
        <main>
          <div className="top">
            <div className="left">
              <div className="editButton">{t("single_edit")}</div>
              <h1 className="title">{title}</h1>
              <div className="item">
                <img src={img} alt="" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">{name}</h1>
                  {isUser && (
                    <>
                      <div className="detailItem">
                        <span className='itemKey'>Email:</span>
                        <span className='itemValue'>{dataItem.email}</span>
                      </div>
                      <div className="detailItem">
                        <span className='itemKey'>Age:</span>
                        <span className='itemValue'>{dataItem.age}</span>
                      </div>
                      <div className="detailItem">
                        <span className='itemKey'>Status:</span>
                        <span className='itemValue'>{dataItem.status}</span>
                      </div>
                      <div className="detailItem">
                        <span className='itemKey'>Country:</span>
                        <span className='itemValue'>USA</span>
                      </div>
                    </>
                  )}
                  {isNotification && (
                    <>
                      <div className="detailItem">
                        <span className='itemKey'>ID:</span>
                        <span className='itemValue'>{dataItem.id}</span>
                      </div>
                      <div className="detailItem">
                        <span className='itemKey'>Date:</span>
                        <span className='itemValue'>{dataItem.date}</span>
                      </div>
                      <div className="detailItem">
                        <span className='itemKey'>Message:</span>
                        <span className='itemValue'>{dataItem.message}</span>
                      </div>
                    </>
                  )}
                  {isOrder && (
                    <>
                      <div className="detailItem">
                        <span className='itemKey'>ID:</span>
                        <span className='itemValue'>{dataItem.id}</span>
                      </div>
                      <div className="detailItem">
                        <span className='itemKey'>Customer:</span>
                        <span className='itemValue'>{dataItem.customer}</span>
                      </div>
                      <div className="detailItem">
                        <span className='itemKey'>Amount:</span>
                        <span className='itemValue'>{dataItem.amount}</span>
                      </div>
                      <div className="detailItem">
                        <span className='itemKey'>Date:</span>
                        <span className='itemValue'>{dataItem.date}</span>
                      </div>
                      <div className="detailItem">
                        <span className='itemKey'>Status:</span>
                        <span className='itemValue'>{dataItem.status}</span>
                      </div>
                    </>
                  )}
                  {isDelivery && (
                    <>
                      <div className="detailItem">
                        <span className='itemKey'>ID:</span>
                        <span className='itemValue'>{dataItem.id}</span>
                      </div>
                      <div className="detailItem">
                        <span className='itemKey'>Destination:</span>
                        <span className='itemValue'>{dataItem.destination}</span>
                      </div>
                      <div className="detailItem">
                        <span className='itemKey'>Status:</span>
                        <span className='itemValue'>{dataItem.status}</span>
                      </div>
                    </>
                  )}
                  {!isUser && !isNotification && !isOrder && !isDelivery && (
                    <>
                      <div className="detailItem">
                        <span className='itemKey'>ID:</span>
                        <span className='itemValue'>{dataItem.id}</span>
                      </div>
                      <div className="detailItem">
                        <span className='itemKey'>Price:</span>
                        <span className='itemValue'>{dataItem.price}</span>
                      </div>
                      <div className="detailItem">
                        <span className='itemKey'>Category:</span>
                        <span className='itemValue'>{dataItem.category}</span>
                      </div>
                      <div className="detailItem">
                        <span className='itemKey'>Stock:</span>
                        <span className='itemValue'>{dataItem.stock}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={3 / 1} title={`${isUser ? "User" : "Item"} Spending (Last 6 Months)`} />
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">{t("single_last_transactions")}</h1>
            <List />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Single
