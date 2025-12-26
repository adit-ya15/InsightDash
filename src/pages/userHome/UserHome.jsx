
import Navbar from "../../components/navbar/Navbar";
import "./userHome.scss";
import { Link, useNavigate } from "react-router-dom";
import List from "../../components/table/Table";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { AuthContext } from "../../context/AuthContext";

const UserHome = () => {
    const { data: orders } = useContext(OrderContext);
    const { currentUser, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/login");
    }

    const userOrders = orders.filter(order => order.userId === currentUser?.id);

    const username = currentUser?.username || "Guest";

    const totalOrders = userOrders.length;
    const pendingOrders = userOrders.filter(order => order.status === "Pending").length;
    const lastOrderAmount = userOrders.length > 0 ? `$${userOrders[userOrders.length - 1].amount}` : "$0";

    const recentOrders = userOrders.slice(-3).reverse().map(order => ({
        id: order.id,
        product: order.product,
        img: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        customer: order.customer,
        date: order.date,
        amount: order.amount,
        method: "Online",
        status: order.status
    }));

    return (
        <div className="userHome">
            <div className="homeContainer">
                <Navbar />
                <div className="hero">
                    <div className="hero-content">
                        <h1>Welcome back, {username} 👋</h1>
                        <p>Here’s a quick overview of your account</p>

                        <div className="summaryCards">
                            <div className="summaryCard">
                                <h3>Total Orders</h3>
                                <div className="value">{totalOrders}</div>
                            </div>
                            <div className="summaryCard">
                                <h3>Pending Orders</h3>
                                <div className="value">{pendingOrders}</div>
                            </div>
                            <div className="summaryCard">
                                <h3>Last Order</h3>
                                <div className="value">{lastOrderAmount}</div>
                            </div>
                        </div>

                        <div className="sectionTitle">Recent Orders</div>
                        <List rows={recentOrders} />

                        <div className="quickActions">
                            <Link to="/orders" className="actionCard">My Orders</Link>
                            <Link to="/profile" className="actionCard">My Profile</Link>
                            <div onClick={handleLogout} className="actionCard" style={{ cursor: "pointer", color: "#d9534f", borderColor: "#d9534f" }}>Logout</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
