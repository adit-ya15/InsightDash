import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/AuthContext";
import { SidebarContext } from "../../context/SidebarContext";

import { useLanguage } from "../../context/LanguageContext";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const { dispatch: authDispatch } = useContext(AuthContext);
    const { active, dispatch: sidebarDispatch } = useContext(SidebarContext);
    const { t } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname.split("/")[1];

    const handleLogout = () => {
        authDispatch({ type: "LOGOUT" });
        navigate("/login");
    }

    const handleClose = () => {
        sidebarDispatch({ type: "CLOSE" });
    }

    return (
        <div className={`sidebar ${active ? "active" : ""}`}>
            <div className="top">
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <span className="logo">InsightDash</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">{t("sidebar_main")}</p>
                    <Link to="/dashboard" style={{ textDecoration: "none" }} onClick={handleClose}>
                        <li className={currentPath === "dashboard" || currentPath === "" ? "active" : ""}>
                            <DashboardIcon className="icon" />
                            <span>{t("sidebar_dashboard")}</span>
                        </li>
                    </Link>
                    <p className="title">{t("sidebar_lists")}</p>
                    <Link to="/users" style={{ textDecoration: "none" }} onClick={handleClose}>
                        <li className={currentPath === "users" ? "active" : ""}>
                            <PersonOutlineIcon className="icon" />
                            <span>{t("sidebar_users")}</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }} onClick={handleClose}>
                        <li className={currentPath === "products" ? "active" : ""}>
                            <StoreIcon className="icon" />
                            <span>{t("sidebar_products")}</span>
                        </li>
                    </Link>
                    <Link to="/orders" style={{ textDecoration: "none" }} onClick={handleClose}>
                        <li className={currentPath === "orders" ? "active" : ""}>
                            <CreditCardIcon className="icon" />
                            <span>{t("sidebar_orders")}</span>
                        </li>
                    </Link>
                    <Link to="/delivery" style={{ textDecoration: "none" }} onClick={handleClose}>
                        <li className={currentPath === "delivery" ? "active" : ""}>
                            <LocalShippingIcon className="icon" />
                            <span>{t("sidebar_delivery")}</span>
                        </li>
                    </Link>
                    <p className="title">{t("sidebar_useful")}</p>
                    <Link to="/stats" style={{ textDecoration: "none" }} onClick={handleClose}>
                        <li className={currentPath === "stats" ? "active" : ""}>
                            <InsertChartIcon className="icon" />
                            <span>{t("sidebar_stats")}</span>
                        </li>
                    </Link>
                    <Link to="/notifications" style={{ textDecoration: "none" }} onClick={handleClose}>
                        <li className={currentPath === "notifications" ? "active" : ""}>
                            <NotificationsNoneIcon className="icon" />
                            <span>{t("sidebar_notifications")}</span>
                        </li>
                    </Link>
                    <p className="title">{t("sidebar_service")}</p>
                    <Link to="/system-health" style={{ textDecoration: "none" }} onClick={handleClose}>
                        <li className={currentPath === "system-health" ? "active" : ""}>
                            <SettingsSystemDaydreamOutlinedIcon className="icon" />
                            <span>{t("sidebar_system_health")}</span>
                        </li>
                    </Link>
                    <Link to="/logs" style={{ textDecoration: "none" }} onClick={handleClose}>
                        <li className={currentPath === "logs" ? "active" : ""}>
                            <PsychologyOutlinedIcon className="icon" />
                            <span>{t("sidebar_logs")}</span>
                        </li>
                    </Link>
                    <Link to="/settings" style={{ textDecoration: "none" }} onClick={handleClose}>
                        <li className={currentPath === "settings" ? "active" : ""}>
                            <SettingsApplicationsIcon className="icon" />
                            <span>{t("sidebar_settings")}</span>
                        </li>
                    </Link>
                    <p className="title">{t("sidebar_user")}</p>
                    <Link to="/profile" style={{ textDecoration: "none" }} onClick={handleClose}>
                        <li className={currentPath === "profile" ? "active" : ""}>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>{t("sidebar_profile")}</span>
                        </li>
                    </Link>
                    <li onClick={handleLogout} style={{ cursor: "pointer" }}>
                        <ExitToAppIcon className="icon" />
                        <span>{t("sidebar_logout")}</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    );
};

export default Sidebar;