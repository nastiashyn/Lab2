import { useCallback, useEffect, useState } from "react";

export const useScrollY = () => {
  const isBrowser = typeof window !== "undefined";
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = isBrowser ? window.scrollY : 0;
    setScrollY(currentScrollY);
  }, [isBrowser]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrollY;
};
