"use client";

import React, { useState, useEffect } from "react";
import ThemeContext from "@/context/themeContext";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeLocalStorge: boolean =
    typeof localStorage !== "undefined" && localStorage.getItem("hotel-theme")
      ? JSON.parse(localStorage.getItem("hotel-theme")!)
      : false;
  const [darkTheme, setDarkTheme] = useState<boolean>(themeLocalStorge);
  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if (!renderComponent) return <></>;
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
        <div className="dark:text-white dark:bg-black bg-white text-[#1E1E1E]">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
