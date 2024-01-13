import { useEffect } from "react";

const useHorizontalScrollbar = () => {
  useEffect(() => {
    const scrollbarContainer = document.createElement("div");
    scrollbarContainer.id = "horizontal-scrollbar-container";
    document.body.appendChild(scrollbarContainer);

    const scrollbarProgress = document.createElement("div");
    scrollbarProgress.id = "horizontal-scrollbar-progress";
    scrollbarContainer.appendChild(scrollbarProgress);

    const updateScrollbar = () => {
      const scrollPercentage =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      scrollbarProgress.style.width = `${scrollPercentage}%`;
    };

    window.addEventListener("scroll", updateScrollbar);
    return () => {
      window.removeEventListener("scroll", updateScrollbar);
    };
  }, []);
};

export default useHorizontalScrollbar;
