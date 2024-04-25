import React from "react";
import useFetch from "react-fetch-hook";
import styled from "styled-components";
import "./../../assets/home.css";

import SliderPage from "../slider";

const Wrapper = styled.div``;

const LoginPage: React.FC = () => {
  const { data, isLoading, error }: any = useFetch(
    "https://krds-assignment.github.io/aoc/api-assets/data.json"
  );

  if (error) {
    console.log(error);
  }
  console.log({ data });
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Wrapper>
      <div>
        {isLoading && <div>Loading...</div>}
        {data && data.features.length > 0 && (
          <div className="container desktop-view">
            {data.features.map((item: any) => (
              <div
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
                            : item?.title?.includes("For the wise") && "skyblue",
                }}
              >
                <div
                  style={{
                    textAlign: "justify",
                    width: "100%",
                    marginLeft: "20px",
                  }}
                >
                  {item?.title?.includes("Astonishing") ? (
                    <img
                      className="logo"
                      src="https://krds-assignment.github.io/aoc/api-assets/logo-aoc.png"
                    />
                  ):(
                    <div>{" "}<br/><br/></div>
                  )}
                </div>
                <div className="brand-container">
                  <div className="child-container">
                    <div className="content">
                      <div>
                        <img src={item?.logo} />
                      </div>
                      <div className="title">{item?.title}</div>
                      <div style={{ color: "#FFF" }}>{item?.desc}</div>
                    </div>
                    <div>
                      <img className="imageC" src={item?.image} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="Carousel-container">
          <SliderPage />
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
