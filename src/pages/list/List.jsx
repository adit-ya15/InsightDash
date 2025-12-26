import React, { useContext } from 'react'
import "./list.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'
import { AuthContext } from "../../context/AuthContext"

const List = () => {
    const { currentUser } = useContext(AuthContext);
    const isUser = currentUser?.role === "user";

    return (
        <div className='list'>
            {!isUser && <Sidebar />}
            <div className="listContainer" style={isUser ? { maxWidth: "1200px", margin: "0 auto" } : {}}>
                <Navbar />
                <main>
                    <Datatable />
                </main>
            </div>
        </div>
    )
}

export default List