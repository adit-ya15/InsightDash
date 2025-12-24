export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    { field: "email", headerName: "Email", width: 230 },
    { field: "age", headerName: "Age", width: 100 },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

export const userRows = [
     {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "2snow@gmail.com",
        status: "passive",
        age: 42,
    },
];

export const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "product",
        headerName: "Product",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="product" />
                    {params.row.title}
                </div>
            );
        },
    },
    { field: "category", headerName: "Category", width: 150 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "stock", headerName: "Stock", width: 100 },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

export const productRows = [
    {
        id: 1,
        title: "Apple Macbook Pro",
        img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        category: "Computers",
        price: "$2000",
        stock: "123",
        status: "active",
    },
    {
        id: 2,
        title: "iPhone 14 Pro",
        img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        category: "Phone",
        price: "$999",
        stock: "45",
        status: "active",
    },
];

// Orders
export const orderColumns = [
    { field: "id", headerName: "Order ID", width: 100 },
    { field: "product", headerName: "Product", width: 200 },
    { field: "customer", headerName: "Customer", width: 150 },
    { field: "date", headerName: "Date", width: 120 },
    { field: "amount", headerName: "Amount", width: 100 },
    { 
        field: "status", 
        headerName: "Status", 
        width: 130,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

export const orderRows = [
    {
        id: 1143155,
        product: "Acer Nitro 5",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        status: "Approved",
    },
    {
        id: 2235235,
        product: "Playstation 5",
        customer: "Michael Doe",
        date: "1 March",
        amount: 900,
        status: "Pending",
    },
];

// Delivery
export const deliveryColumns = [
     { field: "id", headerName: "Tracking ID", width: 120 },
     { field: "product", headerName: "Product", width: 200 },
     { field: "destination", headerName: "Destination", width: 200 },
     { 
        field: "status", 
        headerName: "Status", 
        width: 130,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

export const deliveryRows = [
    {
        id: "TRK-001",
        product: "Acer Nitro 5",
        destination: "Los Angeles, CA",
        status: "In Transit", 
    },
    {
        id: "TRK-002",
        product: "Playstation 5",
        destination: "New York, NY",
        status: "Delivered",
    },
];

// Notifications
export const notificationColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "message", headerName: "Message", width: 400 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "type", headerName: "Type", width: 120 },
];

export const notificationRows = [
    {
        id: 1,
        message: "New order received from John Smith",
        date: "2 mins ago",
        type: "Order",
    },
    {
        id: 2,
        message: "Server load high (90%)",
        date: "10 mins ago",
        type: "Alert",
    },
    {
        id: 3,
        message: "Campaign #52 completed",
        date: "1 hour ago",
        type: "System",
    },
];

// System Health
export const systemHealthColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "service", headerName: "Service Name", width: 200 },
    { field: "uptime", headerName: "Uptime", width: 150 },
    { field: "cpu", headerName: "CPU Usage", width: 120 },
    { 
        field: "status", 
        headerName: "Status", 
        width: 130,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status.toLowerCase()}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

export const systemHealthRows = [
    {
        id: 1,
        service: "Main Database",
        uptime: "99.99%",
        cpu: "12%",
        status: "Operational", // Will use default styling
    },
    {
        id: 2,
        service: "Auth Service",
        uptime: "99.95%",
        cpu: "5%",
        status: "Operational",
    },
    {
        id: 3,
        service: "Payment Gateway",
        uptime: "98.50%",
        cpu: "45%",
        status: "Degraded", // Might map to Pending or custom
    },
];

// Logs
export const logColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "level", headerName: "Level", width: 100 },
    { field: "message", headerName: "Message", width: 400 },
    { field: "timestamp", headerName: "Timestamp", width: 200 },
];

export const logRows = [
    {
        id: 1,
        level: "INFO",
        message: "User login successful (ID: 5)",
        timestamp: "2023-10-27 10:30:00",
    },
     {
        id: 2,
        level: "WARN",
        message: "Failed login attempt (IP: 192.168.1.1)",
        timestamp: "2023-10-27 10:35:00",
    },
     {
        id: 3,
        level: "ERROR",
        message: "Database connection timeout",
        timestamp: "2023-10-27 10:40:00",
    },
];