import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import "./profile.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { OrderContext } from "../../context/OrderContext";
const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const isUser = currentUser?.role === "user";
  const { data: orders } = useContext(OrderContext);
  const userOrders = orders.filter(order => order.userId === currentUser?.id);
  const totalOrders = userOrders.length;
  return (
    <div className="profile">
      {!isUser && <Sidebar />}
      <div className="profileContainer" style={isUser ? { paddingLeft: "20px" } : {}}>
        <Navbar />
        <div className="top">
          <div className="left">
            {!isUser && <div className="editButton">Edit</div>}
            <h1 className="title">My Profile</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{currentUser?.username || "Admin User"}</h1>
                <div className="detailItem">
                  <span className='itemKey'>Role:</span>
                  <span className='itemValue'>{currentUser?.role || "Admin"}</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>{currentUser?.email || "admin@gmail.com"}</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>{currentUser?.phone || "+1 555 123 4567"}</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>
                    {currentUser?.address || "Elton St. 234 Garden Yd. NewYork"}
                  </span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>{currentUser?.country || "USA"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right" style={isUser ? { flex: 1 } : {}}>
            {!isUser ? (
              <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
            ) : (
              <>
                <h1 className="title">Account Summary</h1>
                <div className="item">
                  <div className="details">
                    <div className="detailItem">
                      <span className="itemKey">Member since:</span>
                      <span className="itemValue">Jan 2024</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Account status:</span>
                      <span className="itemValue status active">Active</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Role:</span>
                      <span className="itemValue">User</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Last login:</span>
                      <span className="itemValue">Today at 10:30 AM</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Total Orders:</span>
                      <span className="itemValue">{totalOrders}</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {!isUser && <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>}
      </div>
    </div>
  );
};

export default Profile;
