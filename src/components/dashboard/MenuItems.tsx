import React from "react";

// Material list components
import { ListItemButton } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from 'react-router-dom';

// MAterial icon components
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
//import SupportIcon from '@mui/icons-material/Support';

export const MenuItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/manage/users">
            <ListItemIcon>
                <SupervisedUserCircleIcon/>
            </ListItemIcon>
            <ListItemText primary="Users"/>
        </ListItemButton>
    </React.Fragment>
)













