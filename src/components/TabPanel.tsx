import React from "react";
import { Box } from "@mui/material";

interface ITabPanel {
    children: React.ReactNode
    className?: ""
    value: number
    index: number
};

const TabPanel: React.FC<ITabPanel> = ({children,className,value,index}) => {
  return (
    <div className={className} role="tabpanel" hidden={value !== index} id={`simple-tab-${index}`}>
        {value === index && (
            <Box style={{padding: "0 0.5rem"}}>
                {children}
            </Box>
        )}
    </div>
  )
};

export default TabPanel;