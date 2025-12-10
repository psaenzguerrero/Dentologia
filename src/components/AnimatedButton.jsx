import { motion } from 'framer-motion'

export default function AnimatedButton({ children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ y: -2, boxShadow: '0 12px 24px -12px rgba(2,132,199,0.35)' }}
      whileTap={{ scale: 0.98 }}
      className={`btn-primary ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
