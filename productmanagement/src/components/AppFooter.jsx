import React from "react";
import { Typography } from "antd";
export const AppFooter = () => {
    return (
        <div className="AppFooter">
            <Typography>
                {(new Date()).toLocaleString()}
            </Typography>
        </div>
         
    );
};
 
