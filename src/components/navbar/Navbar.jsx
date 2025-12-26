import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useSearch } from "../../context/SearchContext";
import { UserContext } from "../../context/userContext";
import { ProductContext } from "../../context/ProductContext";
import { OrderContext } from "../../context/OrderContext";
import { DeliveryContext } from "../../context/DeliveryContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useLanguage } from "../../context/LanguageContext";
import { AuthContext } from "../../context/AuthContext";
import { SidebarContext } from "../../context/SidebarContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { dispatch: sidebarDispatch } = useContext(SidebarContext);
  const { setQuery } = useSearch();
  const { language, toggleLanguage, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const { data: users } = useContext(UserContext);
  const { data: products } = useContext(ProductContext);
  const { data: orders } = useContext(OrderContext);
  const { data: delivery } = useContext(DeliveryContext);
  const darkMode = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const isUser = currentUser?.role === "user";

  useEffect(() => {
    if (isUser) return;

    const delayDebounceFn = setTimeout(() => {
      setQuery(searchTerm);

      if (searchTerm.trim() === "") {
        setSearchResults([]);
        return;
      }

      const lowerQuery = searchTerm.toLowerCase();

      const filteredUsers = users.filter(u => u.username.toLowerCase().includes(lowerQuery)).map(u => ({ ...u, type: 'users', label: u.username }));
      const filteredProducts = products.filter(p => p.title.toLowerCase().includes(lowerQuery)).map(p => ({ ...p, type: 'products', label: p.title }));
      const filteredOrders = orders.filter(o => o.customer.toLowerCase().includes(lowerQuery) || o.product.toLowerCase().includes(lowerQuery)).map(o => ({ ...o, type: 'orders', label: `Order: ${o.product} for ${o.customer}` }));
      const filteredDelivery = delivery.filter(d => (d.destination && d.destination.toLowerCase().includes(lowerQuery)) || (d.id && d.id.toString().toLowerCase().includes(lowerQuery))).map(d => ({ ...d, type: 'delivery', label: `Delivery to ${d.destination}` }));

      const combined = [...filteredUsers, ...filteredProducts, ...filteredOrders, ...filteredDelivery];
      setSearchResults(combined);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, users, products, orders, delivery, setQuery, isUser]);

  const handleSearchClick = (item) => {
    navigate(`/${item.type}/${item.id}`);
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        {isUser && (
          <Link to="/" style={{ textDecoration: "none", marginRight: "20px" }}>
            <span className="logo">InsightDash</span>
          </Link>
        )}
        {!isUser && (
          <div className="hamburger" onClick={() => sidebarDispatch({ type: "TOGGLE" })}>
            <MenuIcon className="icon" />
          </div>
        )}
        <div className="search">
          {!isUser && (
            <>
              <input
                type="text"
                placeholder={t("navbar_search")}
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
              <SearchOutlinedIcon />
              {searchResults.length > 0 && (
                <div className="searchResults">
                  {searchResults.slice(0, 10).map((result, index) => (
                    <div key={index} className="searchItem" onClick={() => handleSearchClick(result)}>
                      <span className="searchType">{result.type.toUpperCase()}</span>
                      <span className="searchLabel">{result.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        <div className="items">
          <div className="item" onClick={toggleLanguage} style={{ cursor: "pointer" }}>
            <LanguageOutlinedIcon className="icon" />
            {language === "en" ? t("navbar_english") : t("navbar_hindi")}
          </div>
          <div className="item">
            {darkMode.darkMode ? <LightModeIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            /> : <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />}
          </div>
          {!isUser && (
            <>
              <div className="item">
                <FullscreenExitOutlinedIcon
                  className="icon"
                  onClick={handleFullScreen}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="item">
                <Link to="/notifications" style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
                  <NotificationsNoneOutlinedIcon className="icon" />
                  <div className="counter">1</div>
                </Link>
              </div>
              <div className="item">
                <Link to="/messages" style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
                  <ChatBubbleOutlineOutlinedIcon className="icon" />
                  <div className="counter">2</div>
                </Link>
              </div>
              <div className="item">
                <Link to="/logs" style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
                  <ListOutlinedIcon className="icon" />
                </Link>
              </div>
            </>
          )}
          <div className="item">
            <Link to="/profile">
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;