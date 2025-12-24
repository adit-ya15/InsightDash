import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import "./genericList.scss";

const GenericList = () => {
  const location = useLocation();
  const title = location.pathname.split("/")[1].toUpperCase();

  return (
    <div className="genericList">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="content">
            <h1>{title}</h1>
            <p>This page is currently under construction.</p>
        </div>
      </div>
    </div>
  );
};

export default GenericList;
