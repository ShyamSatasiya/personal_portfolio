import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const MotionImage = motion(Image);

const Logo = ({ src }) => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Link href="/">
        <MotionImage
          src={src}
          width={70}
          height={70}
          alt="logo"
          className="rounded-full"
          whileHover={{ scale: 1.1 }}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
    </div>
  );
};

export default Logo;
