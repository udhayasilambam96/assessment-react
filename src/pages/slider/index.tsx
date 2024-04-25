import React from "react";
import useFetch from "react-fetch-hook";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../assets/slider.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const Wrapper = styled.div``;

const LoginPage: React.FC = () => {
  const { data, isLoading, error }: any = useFetch(
    "https://krds-assignment.github.io/aoc/api-assets/data.json"
  );

  if (error) {
    console.log(error);
  }
  console.log({ data });
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };
  return (
    <Wrapper>
      <div>
        <div className="carousel">
          <ul className="slides">
            {isLoading && <div>Loading...</div>}
            {data && data.features.length > 0 && (
              <div className="container">
                <Slider {...settings}>
                  {data.features.map((item: any, index: any) => (
                    <>
                      <li className="slide-container">
                        <div
                          className="brand-container"
                          style={{
                            background: item?.title?.includes("Astonishing")
                              ? "lightgreen"
                              : item?.title?.includes("Be hooked")
                              ? "coral"
                              : item?.title?.includes("best things in life")
                              ? "slateblue"
                              : item?.title?.includes("thump never ends")
                              ? "darkorange"
                              : item?.title?.includes("Being globally you")
                              ? "indianred"
                              : item?.title?.includes("For the wise") &&
                                "skyblue",
                          }}
                        >
                          <div className="child-container slider-section">
                            <div className="content">
                              <div>
                                <img src={item?.logo} />
                              </div>
                              <div className="title">{item?.title}</div>
                              <div>{item?.desc}</div>
                            </div>
                            <div>
                              <img className="imageC" src={item?.image} />
                            </div>
                          </div>
                        </div>
                      </li>
                    </>
                  ))}
                </Slider>
              </div>
            )}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
