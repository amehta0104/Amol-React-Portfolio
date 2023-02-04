import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import theme from '../pages/theme'

import Paper from '@mui/material/Paper'

export default function Footer() {
    return (
    
        <div> 
            <Paper elevation={3} sx={{
                backgroundColor: theme.palette.primary.bg,
                color: 'primary.text',
                padding: 1,
                textAlign: 'center',
                marginTop: 2,
                marginBottom: 2,
                width: '100%',
            }}>
                <Typography variant='body1' component='div'>
                    © 2021 Amol's Portfolio
                </Typography>
            </Paper>
            
       </div>
    )
}