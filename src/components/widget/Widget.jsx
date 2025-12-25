import React, { useContext } from 'react'
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import { AccountBalanceOutlined, MonetizationOnOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { UserContext } from '../../context/userContext';
import { OrderContext } from '../../context/OrderContext';
import { Link } from 'react-router-dom';

const Widget = ({ type }) => {
    let data;

    const { data: users } = useContext(UserContext);
    const { data: orders } = useContext(OrderContext);

    //temporary
    let amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                linkPath: "/users",
                icon: <PersonOutlinedIcon className='icon' style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2"}}/>,
            };
            amount = users.length;
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "view all orders",
                linkPath: "/orders",
                icon: <ShoppingCartOutlined className='icon'
                style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2"}}
                />,
            };
            amount = orders.length;
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                linkPath: "/stats",
                icon: <MonetizationOnOutlined className='icon'
                style={{color:"green",backgroundColor:"rgba(0,128,0,0.2"}}
                />,
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                linkPath: "/stats",
                icon: <AccountBalanceOutlined className='icon'
                style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2"}}
                />
            };
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && "$"}{amount}</span>
                {data.linkPath ? (
                    <Link to={data.linkPath} className='link'>{data.link}</Link>
                ) : (
                   <span className='link'>{data.link}</span>
                )}
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
