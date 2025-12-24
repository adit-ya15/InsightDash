import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./settings.scss";

const Settings = () => {
  return (
    <div className="settings">
      <Sidebar />
      <div className="settingsContainer">
        <Navbar />
        <div className="content">
            <h1 className="title">Settings</h1>
            
            <div className="section">
                <h2>Account Settings</h2>
                 <div className="formGroup">
                    <label>Email</label>
                    <input type="email" placeholder="admin@gmail.com" />
                </div>
                 <div className="formGroup">
                    <label>New Password</label>
                    <input type="password" placeholder="" />
                </div>
            </div>

            <div className="section">
                <h2>Preferences</h2>
                <div className="toggleOption">
                    <span>Email Notifications</span>
                    <input type="checkbox" defaultChecked />
                </div>
                <div className="toggleOption">
                    <span>SMS Notifications</span>
                    <input type="checkbox" />
                </div>
                <div className="toggleOption">
                    <span>Dark Mode Default</span>
                    <input type="checkbox" />
                </div>
            </div>
            
            <button className="saveButton">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
