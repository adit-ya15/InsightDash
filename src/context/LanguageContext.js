import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    sidebar_main: "MAIN",
    sidebar_dashboard: "Dashboard",
    sidebar_lists: "LISTS",
    sidebar_users: "Users",
    sidebar_products: "Products",
    sidebar_orders: "Orders",
    sidebar_delivery: "Delivery",
    sidebar_useful: "USEFUL",
    sidebar_stats: "Stats",
    sidebar_notifications: "Notifications",
    sidebar_service: "SERVICE",
    sidebar_system_health: "System Health",
    sidebar_logs: "Logs",
    sidebar_settings: "Settings",
    sidebar_user: "USER",
    sidebar_profile: "Profile",
    sidebar_logout: "Logout",
    
    navbar_search: "Search...",
    navbar_english: "English",
    navbar_hindi: "Hindi",

    datatable_add_new: "Add New",
    datatable_delete: "Delete",
    datatable_view: "View",
    datatable_action: "Action",
    datatable_no_results: "No results found",

    new_title_add_user: "Add New User",
    new_title_add_product: "Add New Product",
    new_title_add_order: "Add New Order",
    new_title_add_delivery: "Add New Delivery",
    new_btn_send: "Send",
    new_image: "Image",
    
    single_edit: "Edit",
    single_title_user: "User Information",
    single_title_product: "Product Information",
    single_title_order: "Order Details",
    single_title_delivery: "Delivery Details",
    single_title_notification: "Notification Details",
    single_last_transactions: "Last Transactions",
    single_item_not_found: "Item not found",
  },
  hi: {
    sidebar_main: "मुख्य",
    sidebar_dashboard: "डैशबोर्ड",
    sidebar_lists: "सूचियाँ",
    sidebar_users: "उपयोगकर्ता",
    sidebar_products: "उत्पाद",
    sidebar_orders: "आर्डर",
    sidebar_delivery: "वितरण",
    sidebar_useful: "उपयोगी",
    sidebar_stats: "आँकड़े",
    sidebar_notifications: "सूचनाएं",
    sidebar_service: "सेवा",
    sidebar_system_health: "सिस्टम स्वास्थ्य",
    sidebar_logs: "लॉग्स",
    sidebar_settings: "सेटिंग्स",
    sidebar_user: "उपयोगकर्ता",
    sidebar_profile: "प्रोफाइल",
    sidebar_logout: "लॉग आउट",

    navbar_search: "खोजें...",
    navbar_english: "अंग्रेज़ी",
    navbar_hindi: "हिंदी",

    datatable_add_new: "नया जोड़ें",
    datatable_delete: "हटाएं",
    datatable_view: "देखें",
    datatable_action: "कार्रवाई",
    datatable_no_results: "कोई परिणाम नहीं मिला",

    new_title_add_user: "नया उपयोगकर्ता जोड़ें",
    new_title_add_product: "नया उत्पाद जोड़ें",
    new_title_add_order: "नया आर्डर जोड़ें",
    new_title_add_delivery: "नया वितरण जोड़ें",
    new_btn_send: "भेजें",
    new_image: "छवि",

    single_edit: "संपादित करें",
    single_title_user: "उपयोगकर्ता जानकारी",
    single_title_product: "उत्पाद जानकारी",
    single_title_order: "आर्डर विवरण",
    single_title_delivery: "वितरण विवरण",
    single_title_notification: "अधिसूचना विवरण",
    single_last_transactions: "पिछले लेनदेन",
    single_item_not_found: "वस्तु नहीं मिली",
  }
};

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
