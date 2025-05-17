import {Box, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface Props {
    toggleTheme: () => void;
}

export default function WelcomePage({toggleTheme} : Props) {
    const navigate = useNavigate();

    return (
        <>
            <Box style={{display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Box display="flex" flexDirection="column" gap='16px'>
                    <Typography>
                        Welcome to Cryptex
                    </Typography>
                    <Box display="flex" flexDirection="column" gap='16px'>
                        <Button variant="contained" style={{ textTransform: 'none' }} onClick={() => navigate('/login')}>
                            Log in
                        </Button>
                        <Button variant="contained" style={{ textTransform: 'none' }}>
                            Sign up
                        </Button>
                        <Button onClick={toggleTheme} variant="outlined" color="primary">
                            Toggle Theme
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}