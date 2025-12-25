import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./settings.scss";
import { useState, useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { useLanguage } from "../../context/LanguageContext";

const Settings = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  const { language, toggleLanguage } = useLanguage();
  
  const [profile, setProfile] = useState({
      username: "AdminUser",
      email: "admin@insightdash.com",
      address: "123 Main St, New York, NY",
      password: "",
      avatar: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  });

  const handleInput = (e) => {
      setProfile({...profile, [e.target.name]: e.target.value});
  }

  const handleAvatarChange = (e) => {
      if (e.target.files && e.target.files[0]) {
          setProfile({ ...profile, avatar: URL.createObjectURL(e.target.files[0]) });
      }
  }

  const handleSave = () => {
      alert("Settings saved successfully! (Simulation)");
  }

  return (
    <div className="settings">
      <Sidebar />
      <div className="settingsContainer">
        <Navbar />
        <div className="content">
            <h1 className="title">Settings</h1>
            
            <div className="section">
                <h2>Profile Settings</h2>
                <div className="profileHeader">
                    <img src={profile.avatar || "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="avatar" />
                    <input 
                        type="file" 
                        id="file" 
                        onChange={handleAvatarChange} 
                        style={{ display: "none" }} 
                    />
                    <label htmlFor="file" className="uploadButton">Change Avatar</label>
                </div>
                 <div className="formGroup">
                    <label>Username</label>
                    <input type="text" name="username" value={profile.username} onChange={handleInput} />
                </div>
                 <div className="formGroup">
                    <label>Email</label>
                    <input type="email" name="email" value={profile.email} onChange={handleInput} />
                </div>
                <div className="formGroup">
                    <label>Address</label>
                    <input type="text" name="address" value={profile.address} onChange={handleInput} />
                </div>
                 <div className="formGroup">
                    <label>New Password</label>
                    <input type="password" name="password" placeholder="Leave blank to keep current" onChange={handleInput} />
                </div>
            </div>

            <div className="section">
                <h2>App Preferences</h2>
                <div className="toggleOption">
                    <span>Dark Mode</span>
                    <label className="switch">
                        <input type="checkbox" checked={darkMode} onChange={() => dispatch({ type: "TOGGLE" })} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="toggleOption">
                    <span>Language (Hindi/English)</span>
                    <label className="switch">
                        <input type="checkbox" checked={language === "hi"} onChange={toggleLanguage} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

            <div className="section">
                <h2>Notifications</h2>
                <div className="toggleOption">
                    <span>Email Alerts</span>
                    <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="toggleOption">
                    <span>SMS Alerts</span>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            
            <button className="saveButton" onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
