import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
         <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">My Profile</h1>
            <div className="item">
            <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="itemImg" />
            <div className="details">
              <h1 className="itemTitle">Admin User</h1>
              
              <div className="detailItem">
                <span className='itemKey'>Role:</span>
                <span className='itemValue'>Super Admin</span>
              </div>
              <div className="detailItem">
                <span className='itemKey'>Email:</span>
                <span className='itemValue'>admin@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className='itemKey'>Phone:</span>
                <span className='itemValue'>+1 555 123 4567</span>
              </div>
               <div className="detailItem">
                <span className='itemKey'>Location:</span>
                <span className='itemValue'>New York, USA</span>
              </div>
              
            </div>
          </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="Admin Activity (Last 6 Months)"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
