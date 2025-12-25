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
import { UserContext } from "../../context/userContext"
import { ProductContext } from "../../context/ProductContext";
import { OrderContext } from "../../context/OrderContext";
import { DeliveryContext } from "../../context/DeliveryContext";
import { useLanguage } from "../../context/LanguageContext";

const Datatable = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const { t } = useLanguage();

  const { data: userData, handleDelete: deleteUser } = useContext(UserContext);
  const { data: productData, handleDelete: deleteProduct } = useContext(ProductContext);
  const { data: orderData, handleDelete: deleteOrder } = useContext(OrderContext);
  const { data: deliveryData, handleDelete: deleteDelivery } = useContext(DeliveryContext);

  useEffect(() => {
    switch(path) {
        case "users":
            setData(userData);
            setColumns(userColumns);
            break;
        case "products":
            setData(productData);
            setColumns(productColumns);
            break;
        case "orders":
            setData(orderData);
            setColumns(orderColumns);
            break;
        case "delivery":
            setData(deliveryData);
            setColumns(deliveryColumns);
            break;
        case "notifications":
            setData(notificationRows);
            setColumns(notificationColumns);
            break;
        case "system-health":
            setData(systemHealthRows);
            setColumns(systemHealthColumns);
            break;
        case "logs":
            setData(logRows);
            setColumns(logColumns);
            break;
        default:
            setData([]);
            setColumns([]);
            break;
    }
  }, [path, userData, productData, orderData, deliveryData]);

  const handleDelete = (id) => {
    switch(path) {
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
            <Link to={`/${path}/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">{t("datatable_view")}</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              {t("datatable_delete")}
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path.toUpperCase()}
        <Link to={`/${path}/new`} className="link">
          {t("datatable_add_new")}
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[1]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;