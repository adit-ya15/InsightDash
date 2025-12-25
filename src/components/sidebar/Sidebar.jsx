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
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/AuthContext";

import { useLanguage } from "../../context/LanguageContext";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const { dispatch: authDispatch } = useContext(AuthContext);
    const { t } = useLanguage();
    const navigate = useNavigate();

    const handleLogout = () => {
        authDispatch({ type: "LOGOUT" });
        navigate("/login");
    }

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <span className="logo">InsightDash</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">{t("sidebar_main")}</p>
                    <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>{t("sidebar_dashboard")}</span>
                        </li>
                    </Link>
                    <p className="title">{t("sidebar_lists")}</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>{t("sidebar_users")}</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>{t("sidebar_products")}</span>
                        </li>
                    </Link>
                    <Link to="/orders" style={{ textDecoration: "none" }}>
                        <li>
                            <CreditCardIcon className="icon" />
                            <span>{t("sidebar_orders")}</span>
                        </li>
                    </Link>
                    <Link to="/delivery" style={{ textDecoration: "none" }}>
                        <li>
                            <LocalShippingIcon className="icon" />
                            <span>{t("sidebar_delivery")}</span>
                        </li>
                    </Link>
                    <p className="title">{t("sidebar_useful")}</p>
                    <Link to="/stats" style={{ textDecoration: "none" }}>
                        <li>
                            <InsertChartIcon className="icon" />
                            <span>{t("sidebar_stats")}</span>
                        </li>
                    </Link>
                    <Link to="/notifications" style={{ textDecoration: "none" }}>
                        <li>
                            <NotificationsNoneIcon className="icon" />
                            <span>{t("sidebar_notifications")}</span>
                        </li>
                    </Link>
                    <p className="title">{t("sidebar_service")}</p>
                    <Link to="/system-health" style={{ textDecoration: "none" }}>
                        <li>
                            <SettingsSystemDaydreamOutlinedIcon className="icon" />
                            <span>{t("sidebar_system_health")}</span>
                        </li>
                    </Link>
                    <Link to="/logs" style={{ textDecoration: "none" }}>
                        <li>
                            <PsychologyOutlinedIcon className="icon" />
                            <span>{t("sidebar_logs")}</span>
                        </li>
                    </Link>
                    <Link to="/settings" style={{ textDecoration: "none" }}>
                        <li>
                            <SettingsApplicationsIcon className="icon" />
                            <span>{t("sidebar_settings")}</span>
                        </li>
                    </Link>
                    <p className="title">{t("sidebar_user")}</p>
                    <Link to="/profile" style={{ textDecoration: "none" }}>
                        <li>
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