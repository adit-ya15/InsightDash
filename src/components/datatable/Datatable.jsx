import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {
  userColumns,
  productColumns,
  orderColumns,
  deliveryColumns,
  notificationColumns, notificationRows,
  systemHealthColumns, systemHealthRows,
  logColumns, logRows
} from "../../datatablesource";

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { ProductContext } from "../../context/ProductContext";
import { OrderContext } from "../../context/OrderContext";
import { DeliveryContext } from "../../context/DeliveryContext";
import { useLanguage } from "../../context/LanguageContext";
import { AuthContext } from "../../context/AuthContext";

const Datatable = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);

  const { data: users, handleDelete: deleteUser } = useContext(UserContext);
  const { data: products, handleDelete: deleteProduct } = useContext(ProductContext);
  const { data: orders, handleDelete: deleteOrder } = useContext(OrderContext);
  const { data: delivery, handleDelete: deleteDelivery } = useContext(DeliveryContext);
  const { currentUser } = useContext(AuthContext);

  // Define columns and data source based on path
  let columns, data, deleteFunc;

  switch (path) {
    case "users":
      columns = userColumns;
      data = users;
      deleteFunc = deleteUser;
      break;
    case "products":
      columns = productColumns;
      data = products;
      deleteFunc = deleteProduct;
      break;
    case "orders":
      columns = orderColumns;
      data = orders;
      deleteFunc = deleteOrder;
      break;
    case "delivery":
      columns = deliveryColumns;
      data = delivery;
      deleteFunc = deleteDelivery;
      break;
    case "notifications":
      columns = notificationColumns;
      data = notificationRows;
      deleteFunc = () => { };
      break;
    case "system-health":
      columns = systemHealthColumns;
      data = systemHealthRows;
      deleteFunc = () => { };
      break;
    case "logs":
      columns = logColumns;
      data = logRows;
      deleteFunc = () => { };
      break;
    case "messages":
      columns = []; // Placeholder
      data = [];
      deleteFunc = () => { };
      break;
    default:
      columns = [];
      data = [];
  }

  useEffect(() => {
    if (currentUser?.role === "user" && path === "orders") {
      setList(data.filter(item => item.userId === currentUser.id));
    } else {
      setList(data);
    }
  }, [data, currentUser, path]);

  const handleDelete = (id) => {
    switch (path) {
      case "users":
        deleteUser(id);
        break;
      case "products":
        deleteProduct(id);
        break;
      case "orders":
        deleteOrder(id);
        break;
      case "delivery":
        deleteDelivery(id);
        break;
      default:
        break;
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: t("datatable_action"),
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {!["logs", "system-health"].includes(path) && currentUser?.role !== "user" && (
              <Link to={`/${path}/${params.row.id}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">{t("datatable_view")}</div>
              </Link>
            )}
            {currentUser?.role !== "user" && (
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >
                {t("datatable_delete")}
              </div>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path.toUpperCase()}
        {!["notifications", "logs", "system-health", "messages"].includes(path) && currentUser?.role !== "user" && (
          <Link to={`/${path}/new`} className="link">
            {t("datatable_add_new")}
          </Link>
        )}
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={currentUser?.role === "user" ? columns : columns.concat(actionColumn)}
        pageSize={1}
        rowsPerPageOptions={[1]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;