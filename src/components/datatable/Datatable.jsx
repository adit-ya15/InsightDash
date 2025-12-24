import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { 
    userColumns, userRows, 
    productColumns, productRows,
    orderColumns, orderRows,
    deliveryColumns, deliveryRows,
    notificationColumns, notificationRows,
    systemHealthColumns, systemHealthRows,
    logColumns, logRows
} from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Datatable = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1]; 

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  
  useEffect(() => {
    switch(path) {
        case "users":
            setData(userRows);
            setColumns(userColumns);
            break;
        case "products":
            setData(productRows);
            setColumns(productColumns);
            break;
        case "orders":
            setData(orderRows);
            setColumns(orderColumns);
            break;
        case "delivery":
            setData(deliveryRows);
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
  }, [path]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${path}/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.length > 0 ? columns.concat(actionColumn) : []}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;