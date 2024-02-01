import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { CopyRight } from "./CopyRight.tsx";

export const StyckyFooter = () => {

    return (
        <Box sx={
            {
                display: 'flex',
                flexDirection: 'column'
            }
        }>
            
            <CssBaseline />
            <Box 
                component='footer'
                sx={
                    {
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
                    }
                }>

                    <Container maxWidth="sm">
                        <CopyRight sx= {
                            {
                                pt: 4
                            }
                        }/>
                    </Container>

            </Box>
        </Box>
    )
}

