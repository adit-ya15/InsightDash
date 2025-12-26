import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import UserHome from "./pages/userHome/UserHome";
// import GenericList from "./pages/list/GenericList";
import Stats from "./pages/stats/Stats";
import Settings from "./pages/settings/Settings";
import Profile from "./pages/profile/Profile";
import RequireAuth from "./components/RequireAuth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs, orderInputs, deliveryInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
// import { AuthContextProvider } from "./context/AuthContext";

import "./style/global.scss";
import "./style/dark.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route element={<RequireAuth allowedRoles={["user"]} />}>
            <Route path="/" element={<UserHome />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={["user", "admin"]} />}>
            <Route path="orders">
              <Route index element={<List />} />
              <Route path=":orderId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={orderInputs} title="Add New Order" />}
              />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={["admin"]} />}>
            <Route path="dashboard" element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New inputs={productInputs} title="Add New Product" />
                }
              />
            </Route>
            <Route path="delivery">
              <Route index element={<List />} />
              <Route path=":deliveryId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={deliveryInputs} title="Add New Delivery" />}
              />
            </Route>
            <Route path="stats" element={<Stats />} />
            <Route path="notifications">
              <Route index element={<List />} />
              <Route path=":notificationId" element={<Single />} />
            </Route>
            <Route path="messages" element={<List />} />
            <Route path="system-health" element={<List />} />
            <Route path="logs" element={<List />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
