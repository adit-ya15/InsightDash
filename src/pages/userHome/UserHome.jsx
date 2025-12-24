import Navbar from "../../components/navbar/Navbar";

import "./userHome.scss";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserHome = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/login");
    }

  return (
    <div className="userHome">
      <div className="homeContainer">
        <Navbar />
        <div className="hero">
            <div className="hero-content">
                <h1>Welcome Back!</h1>
                <p>Explore your personalized dashboard and manage your profile.</p>
                <div style={{ marginBottom: "20px" }}>
                    <button onClick={handleLogout} style={{ padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer", background: "white", color: "#333", fontWeight: "bold" }}>Logout</button>
                </div>
                <div className="cards">
                    <div className="card">
                        <h3>My Orders</h3>
                        <p>View your recent orders</p>
                    </div>
                    <div className="card">
                        <h3>My Profile</h3>
                        <p>Update your details</p>
                    </div>
                    <div className="card">
                        <h3>Settings</h3>
                        <p>Configure your preferences</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
