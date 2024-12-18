import React from "react";
import { motion } from "motion/react";
import { easeInOut } from "motion";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[650px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [100, 50, 100] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team1}
            className="max-w-sm w-72 rounded-br-[40px] rounded-t-[40px] rounded-lg border-l-4 border-blue-400 border-b-4 shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 180, 100] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team2}
            className="max-w-sm w-72 rounded-br-[40px] rounded-t-[40px] rounded-lg border-l-4 border-blue-400 border-b-4 shadow-2xl"
          />
        </div>
        <div>
          <motion.h1
            animate={{ x: 50, color: "purple" }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeInOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest Job{" "}
            <motion.span
              animate={{ color: ["#097cb9", "#8409b9"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              News!
            </motion.span>
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
