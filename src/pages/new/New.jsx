import React, { useState, useContext } from 'react'
import "./new.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { UserContext } from "../../context/userContext";
import { ProductContext } from "../../context/ProductContext";
import { OrderContext } from "../../context/OrderContext";
import { DeliveryContext } from "../../context/DeliveryContext";
import { useLocation, useNavigate } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";
import { AuthContext } from "../../context/AuthContext";

const New = ({ inputs, title }) => {
  const { currentUser } = useContext(AuthContext);
  const isUser = currentUser?.role === "user";
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const { handleAdd: addUser } = useContext(UserContext);
  const { handleAdd: addProduct } = useContext(ProductContext);
  const { handleAdd: addOrder } = useContext(OrderContext);
  const { handleAdd: addDelivery } = useContext(DeliveryContext);
  const { t } = useLanguage();

  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split("/")[1];

  let displayTitle = title;
  if (path === "users") displayTitle = t("new_title_add_user");
  else if (path === "products") displayTitle = t("new_title_add_product");
  else if (path === "orders") displayTitle = t("new_title_add_order");
  else if (path === "delivery") displayTitle = t("new_title_add_delivery");

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    for (const input of inputs) {
      if (!data[input.name] || data[input.name].trim() === "") {
        isValid = false;
        break;
      }
    }

    if (!isValid) {
      alert("Please fill in all fields");
      return;
    }

    let defaultImg = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";
    if (path === "users") defaultImg = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";
    else if (path === "orders") defaultImg = "https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
    else if (path === "delivery") defaultImg = "https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
    else if (path === "products") defaultImg = "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500";

    const newData = {
      ...data,
      img: file ? URL.createObjectURL(file) : defaultImg,
      status: data.status || "active"
    };

    if (path === "users") {
      addUser(newData);
    } else if (path === "products") {
      addProduct(newData);
    } else if (path === "orders") {
      addOrder(newData);
    } else if (path === "delivery") {
      addDelivery(newData);
    }

    navigate(-1);
  };

  return (
    <div className="new">
      {!isUser && <Sidebar />}
      <div className="newContainer">
        <Navbar />
        <main>
          <div className="top">
            <h1>{displayTitle}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="right">
              <form onSubmit={handleSubmit}>
                <div className="formInput">
                  <label htmlFor="file">
                    {t("new_image")}: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>

                {inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} name={input.name} onChange={handleInput} />
                  </div>
                ))}
                <button>{t("new_btn_send")}</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default New
