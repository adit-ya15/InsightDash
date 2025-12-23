import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows,userColumns } from '../../datatablesource';

const paginationModel = { page: 0, pageSize: 5 };

const Datatable = () => {

    const actionColumn = [
        {field:"action",headerName:"Action",width:200, renderCell:() =>{
            return (
                <div className="cellAction">
                    <div className="viewButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }}
    ]
    return (
        <div className='datatable'>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </div>
    )
}

export default Datatable
