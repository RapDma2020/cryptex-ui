import {Box, TextField, Typography} from "@mui/material";

export function LoginPage() {
    return (
        <Box>
            <Typography>
                Log in
            </Typography>
            <Box>
                <TextField label="Outlined" />
                <TextField label="Filled" />
                <TextField label="Standard" />
            </Box>
        </Box>
    )
}