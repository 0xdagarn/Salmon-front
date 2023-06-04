import React, { useEffect } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import "./Slide.css";
import { Slide } from "./Slide";

// https://ia600300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4

const data = [
  {
    video: "https://bit.ly/3MM7sw9",
    text: "Russia’s First Attack on Ukraine",
    user: "ox...4ever",
    image: "https://i.ytimg.com/vi/2QZUxjzYVzE/maxresdefault.jpg",
  },
  {
    video: "https://bit.ly/3MQ4t5P",
    text: "Russia’s First Attack on Ukraine",
    user: "Hichichi",
    image: "https://i.ytimg.com/vi/2QZUxjzYVzE/maxresdefault.jpg",
  },
  {
    video: "https://bit.ly/45Y7SbJ",
    text: "Russia’s First Attack on Ukraine",
    user: "SassyCat",
    image: "https://i.ytimg.com/vi/2QZUxjzYVzE/maxresdefault.jpg",
  },
  {
    video: "https://bit.ly/3C8FCVW",
    text: "Russia’s First Attack on Ukraine",
    user: "Willpowerade",
    image: "https://i.ytimg.com/vi/2QZUxjzYVzE/maxresdefault.jpg",
  },
  {
    video: "https://bit.ly/3qogsAb",
    text: "Russia’s First Attack on Ukraine",
    user: "WorldofArt",
    image: "https://i.ytimg.com/vi/2QZUxjzYVzE/maxresdefault.jpg",
  },
  {
    video: "https://bit.ly/42gFGxu",
    text: "Russia’s First Attack on Ukraine",
    user: "ApocalypticApes",
    image: "https://i.ytimg.com/vi/2QZUxjzYVzE/maxresdefault.jpg",
  },
];

const PageView = ({ onChange }) => {
  const ref = React.useRef(StackedCarousel);
  //   function onNext(){
  //      ref.current?.goBack(), 5000;
  // }

  function stuff() {
    ref.current.goNext();
  }

  return (
    <div className="card">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={876}
                height={580}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
                fadeDistance={0.5}
                onActiveSlideChange={onChange}
              />
            );
          }}
        />
      </div>
    </div>
  );
};

export default PageView;
