import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import { AuthProvider } from "./auth/useAuth";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
 

root.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
);
