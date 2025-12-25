import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
import { AuthContextProvider } from './context/AuthContext';
import "./style/global.scss";
import { SearchProvider } from "./context/SearchContext";

import { UserContextProvider } from "./context/userContext";
import { ProductContextProvider } from "./context/ProductContext";
import { OrderContextProvider } from "./context/OrderContext";
import { DeliveryContextProvider } from "./context/DeliveryContext";
import { LanguageContextProvider } from "./context/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <LanguageContextProvider>
      <DarkModeContextProvider>
        <AuthContextProvider>
          <UserContextProvider>
            <ProductContextProvider>
              <OrderContextProvider>
                <DeliveryContextProvider>
                  <App />
                </DeliveryContextProvider>
              </OrderContextProvider>
            </ProductContextProvider>
          </UserContextProvider>
        </AuthContextProvider>
      </DarkModeContextProvider>
      </LanguageContextProvider>
    </SearchProvider>
  </React.StrictMode>
);
