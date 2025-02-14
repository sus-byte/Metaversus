"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";

const Navbar = () => (
	<>
		<motion.nav
			variants={navVariants}
			initial="hidden"
			whileInView="show"
			className={`${styles.xPaddings} py-8 relative`}
		>
			<div className="absolute inset-0 w-[50%] gradient-01" />
			
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
        <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
        
        <h2 className="text-white text-[24px] leading-[30px] font-extrabold">METAVERSUS</h2>

        <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
      </div>
		</motion.nav>
	</>
);

export default Navbar;
