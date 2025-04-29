import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer() {
  const [formattedDateTime, setFormattedDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
        currentDate
      );
      const year = currentDate.getUTCFullYear();
      const time = currentDate.toLocaleTimeString("en-US", { hour12: false });

      setFormattedDateTime(`${day} ${month} ${year} | ${time}`);
    };

    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <footer className="w-full sm:text-base dark:text-light dark:border-light border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span suppressHydrationWarning={true}>{formattedDateTime}</span>
        <div className="flex items-center lg:py-2">
          Build with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            {" "}
            &#9825;
          </span>{" "}
          by Shyam Satasiya
        </div>
        <Link href="/">Shyam</Link>
      </Layout>
    </footer>
  );
}

export default Footer;
