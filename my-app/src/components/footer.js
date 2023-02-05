import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import theme from '../pages/theme'

import Paper from '@mui/material/Paper'
import SocialBar from './social-bar'
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion'

export default function Footer() {
    return (
    <AnimatePresence>
        
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{delay: 0.75, duration: 0.5, ease:'easeIn' }}
            >
                <Paper elevation={16} sx={{
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
                    </Typography>  <SocialBar />
                </Paper>
        
        
           </motion.div>
    </AnimatePresence>
    )
}