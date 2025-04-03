import React from "react";
import { useOutlet } from "react-router-dom";

export const PageContent = () => {
    const outlet = useOutlet();
    return (
        <div className="PageContent">
            {outlet}
        </div>

    );
};  
