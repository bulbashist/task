import { useLayoutEffect, useState } from "react";
import Navigation from "../../components/navigation";
import Header from "./header";
import MainNavigation from "./main-navigation";
import PhotoList from "./photo-list";

export const MainPage = () => {
  const [isFixed, setFixed] = useState(false);

  /* check */
  useLayoutEffect(() => {
    const handler = (e) => {
      if (!isFixed && window.scrollY > 500) {
        setFixed(true);
      } else if (isFixed && window.scrollY < 500) {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, [isFixed]);

  return (
    <>
      <Navigation isFixed={isFixed} />
      <Header />
      <MainNavigation />
      <PhotoList />
    </>
  );
};
