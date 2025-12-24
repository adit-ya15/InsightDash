import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

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
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
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