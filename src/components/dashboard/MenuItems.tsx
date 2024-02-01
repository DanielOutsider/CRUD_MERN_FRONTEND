import React from "react";

// Material list components
import { ListItemButton } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// MAterial icon components
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SupportIcon from '@mui/icons-material/Support';

export const MenuItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <SupervisedUserCircleIcon/>
            </ListItemIcon>
            <ListItemText primary="katas"/>
        </ListItemButton>
    </React.Fragment>
)













