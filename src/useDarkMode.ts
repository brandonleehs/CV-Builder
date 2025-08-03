import { useEffect, useState } from "react";

export default function useDarkMode() {
  // Set initial theme based on system preferences
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem("theme") === null) {
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return [darkMode, setDarkMode] as const;
}
