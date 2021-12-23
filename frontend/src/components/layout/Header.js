import React, { useEffect } from "react";
import Navbar from "./Navbar";
// import Hero from "./Hero";

// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getProduct } from "../../redux/actions/productAction";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {/* <Hero /> */}
    </>
  );
};

export default Header;
