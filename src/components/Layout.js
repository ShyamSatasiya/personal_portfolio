import React from "react";
import useHorizontalScrollbar from "./hooks/useHorizontalScrollBar";

function Layout({ children, className = "" }) {
  useHorizontalScrollbar();

  return (
    <div
      className={`w-full h-full inline-block z-0 dark:bg-dark bg-light xl:p-24 lg:p-16 mb:p-12 sm:p-8 p-32 ${className}`}
    >
      {children}{" "}
    </div>
  );
}

export default Layout;
