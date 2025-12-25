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

// Helper to generate random date
const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
}

export const userRows = Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    username: `User ${i + 1}`,
    img: `https://picsum.photos/id/${i + 10}/200`,
    status: Math.random() > 0.5 ? "active" : "passive",
    email: `user${i + 1}@gmail.com`,
    age: Math.floor(Math.random() * 50) + 18,
}));

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

const productTitles = ["Apple Macbook Pro", "iPhone 14 Pro", "Playstation 5", "Acer Nitro 5", "Samsung Galaxy S23", "Dell XPS 15", "iPad Air", "Airpods Pro", "Sony WH-1000XM5", "Nintendo Switch"];
const categories = ["Computers", "Phone", "Gaming", "Tablets", "Accessories", "Audio"];

export const productRows = Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    title: productTitles[Math.floor(Math.random() * productTitles.length)] + ` ${i + 1}`,
    img: `https://picsum.photos/id/${i + 100}/200`,
    category: categories[Math.floor(Math.random() * categories.length)],
    price: `$${Math.floor(Math.random() * 2000) + 100}`,
    stock: Math.floor(Math.random() * 100),
    status: Math.random() > 0.3 ? "active" : "passive",
}));


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

const customerNames = ["John Smith", "Michael Doe", "Jane Doe", "Alice Johnson", "Bob Brown", "Charlie Davis", "Emily White", "Frank Green"];

export const orderRows = Array.from({ length: 60 }, (_, i) => ({
    id: 1143155 + i,
    product: productTitles[Math.floor(Math.random() * productTitles.length)],
    customer: customerNames[Math.floor(Math.random() * customerNames.length)],
    date: randomDate(new Date(2023, 0, 1), new Date()),
    amount: Math.floor(Math.random() * 1000) + 50,
    status: Math.random() > 0.5 ? "Approved" : "Pending",
}));

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
                    {params.row.status.replace(/\s+/g, '')} 
                </div>
            );
        },
    },
];

const destinations = ["Los Angeles, CA", "New York, NY", "Chicago, IL", "Houston, TX", "Phoenix, AZ", "Philadelphia, PA", "San Antonio, TX", "San Diego, CA"];

export const deliveryRows = Array.from({ length: 60 }, (_, i) => ({
    id: `TRK-${1000 + i}`,
    product: productTitles[Math.floor(Math.random() * productTitles.length)],
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    status: Math.random() > 0.4 ? "In Transit" : "Delivered", 
}));

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