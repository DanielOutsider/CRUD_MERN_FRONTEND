import React, { useState } from "react";

import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import { Dashboard } from "../../../components/dashboard/Dashboard.tsx";

import { UserCrudTable } from "../../../components/manage/user/table/UserCrudTable.tsx";
import UserCrudForm from "../../../components/manage/user/forms/UserCrudForm.tsx";
import CustomBreadcrumb from "../../../components/common/CustomBreadcrumb.tsx";
import Paper from "@mui/material/Paper";
import UserFilterCrudTable from "../../../components/manage/user/forms/UserFilterCrudTable.tsx";


export const UsersPage = () => {

    const breadcrumbItems = [
        { text: 'Dashboard', link: '/dashboard' },
        { text: 'Manage Users', link: '/manage/users' },
      ];

    let stateUserForm:String = 'create';

    const setStateUserForm = (state) => {
        stateUserForm = state;
        handleOpenDialog();
    };

    /**
     * Modal
     */
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };
    /**
     * End Modal
     */


    return (
        <Dashboard>

            <CustomBreadcrumb items={breadcrumbItems} />

            <div>
                <h1 style={{textAlign: 'left', paddingTop: 20 }}>
                    Manage Users
                </h1>
            </div>

            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle sx={{display: 'flex',alignItems: 'center'}}> 
                    <SupervisedUserCircleIcon sx={{marginRight: '15px'}}/>  
                    {stateUserForm === 'create' ? (
                        <p>New User</p>
                    ) : (
                        <p>Update User</p>
                    )}
                </DialogTitle>
                <DialogContent>
                    <UserCrudForm state={stateUserForm} onCloseDialog={handleCloseDialog}/>
                </DialogContent>
                
                {/* <DialogActions>
                    <Button onClick={handleCloseDialog}>Close</Button>
                </DialogActions> */}
            </Dialog>

            <Paper sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                marginTop: 6,
            }}>
                <UserFilterCrudTable/>
            </Paper>

            <Paper sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                marginTop: 5,
            }}>

                <Button
                    onClick={() => setStateUserForm('create')}
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{  mb: 3 }} 
                >
                    New User
                </Button>
                <UserCrudTable/>
            </Paper>

            
        </Dashboard>
    )
}