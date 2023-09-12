
import { Box, Typography } from '@mui/material'
import React from 'react'
const Footer = () => {

    return (
        <>
            <Box sx={{ textAlign: "center", bgcolor: "black", color: "white", p: 1.5 }}>
                <Box sx={{
                    my: 1, "& svg": {
                        fontSize: "30px",
                        cursor: "pointer",
                        mr: 1,
                    },
                    "& svg:hover": {
                        color: "goldenrod",
                        transform: "translateX(5px)",
                        transition: "all 400ms",
                    }
                }}>

                </Box>
                <Typography variant='h7' sx={{
                    "@media(min-width:600px)": {
                        fontSize: "1rem",
                    }
                }}>
                    All Rights Reserved @Shaikh_Afzal_Javed_2023
                </Typography>
            </Box>
        </>
    )
}

export default Footer