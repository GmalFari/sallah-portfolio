import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {I18nextProvider} from "react-i18next";
// import i18next from 'i18next';
import i18next from 'i18next';
import { BrowserRouter } from 'react-router-dom';

import common_de from "./translations/ar/common.json";
import common_en from "./translations/en/common.json";
i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'ar',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        ar: {
            common: common_de
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <I18nextProvider i18n={i18next} >

    <App />
    </I18nextProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
