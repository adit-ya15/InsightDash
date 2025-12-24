import React, { useMemo } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./single.scss"
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'
import { useLocation, useParams } from "react-router-dom";
import { userRows, productRows, notificationRows } from "../../datatablesource";

const Single = () => {
  const location = useLocation();
  const { userId, productId, notificationId } = useParams(); // Depends on route definition in App.js
  const path = location.pathname.split("/")[1]; // "users" or "products"
  const id = userId || productId || notificationId;

  const dataItem = useMemo(() => {
    if (path === "users") {
        return userRows.find(item => item.id === parseInt(id));
    } else if (path === "products") {
        return productRows.find(item => item.id === parseInt(id));
    } else if (path === "notifications") {
        return notificationRows.find(item => item.id === parseInt(id));
    }
  }, [path, id]);

  const isUser = path === "users";
  const isNotification = path === "notifications";
  
  // Fallback if not found
  if (!dataItem) {
      return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div style={{padding: "20px"}}>Item not found</div>
            </div>
        </div>
      );
  }

  let title;
  if (isUser) title = "User Information";
  else if (isNotification) title = "Notification Details";
  else title = "Product Information";

  let img;
  if (isUser) {
      img = dataItem.img || "https://images.pexels.com/photos/29823666/pexels-photo-29823666.jpeg";
  } else if (isNotification) {
      img = "https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"; // Generic bell/alert image
  } else {
      img = dataItem.img || "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500";
  }

  const name = isUser ? dataItem.username : (isNotification ? dataItem.type : dataItem.title);

  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
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
              {!isUser && !isNotification && (
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
            <Chart aspect={3/1} title={`${isUser ? "User" : (isNotification ? "Notification" : "Product")} Spending (Last 6 Months)`}/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
