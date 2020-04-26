import React, { useEffect } from "react";
import Header from "components/Header";
import LandingWrapper from "components/LandingWrapper";
import $ from "jquery";
import HeroContent from "components/HeroContent";
import QualitiveScreen from "components/QualitiveScreen";
import Speciality from "components/Speciality";
import Team from "components/Team";
import Blogs from "components/Blogs";
import Footer from "components/Footer";
import { blogs, whyCooseUs } from "data";

const App = () => {
  useEffect(() => {
    document.addEventListener(
      "scroll",
      function () {
        if ($(window).scrollTop() > 400) {
          $(".go-top").fadeIn(600);
        } else {
          $(".go-top").fadeOut(600);
        }
      },
      []
    );
  });
  return (
    <>
      <Header />
      <LandingWrapper />
      <HeroContent contents={whyCooseUs} />
      <QualitiveScreen />
      <Speciality />
      <Team />
      <Blogs blogs={blogs} />
      <Footer />
    </>
  );
};

export default App;
