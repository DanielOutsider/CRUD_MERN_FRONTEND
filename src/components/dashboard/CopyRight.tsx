import { Typography } from "@mui/material";
import Link from "@mui/material/Link";


export const CopyRight = (props: any) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            { 'CopyRight º' }
            { new Date().getFullYear() }
        </Typography>
    )
}

