'use client'

import { motion } from 'framer-motion';

export default function Template( {children}: {children: React.ReactNode} ) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.45 }}
        >
            {children}
        </motion.div>
    )
}