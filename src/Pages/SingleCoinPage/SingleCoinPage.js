import React from "react";
import { motion } from "framer-motion";
const SingleCoinPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      SingleCoinPage
    </motion.div>
  );
};

export default SingleCoinPage;
