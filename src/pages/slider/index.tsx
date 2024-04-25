import React from "react";
import useFetch from "react-fetch-hook";
import styled from "styled-components";
import './../../assets/slider.css';

const Wrapper = styled.div`
`;

const LoginPage: React.FC = () => {
    const { data, isLoading, error }: any = useFetch('https://krds-assignment.github.io/aoc/api-assets/data.json')

    if (error) {
        console.log(error)
    }
    console.log({ data });
    return (
        <Wrapper><div>
            <div className="carousel">
                <ul className="slides">
                    {isLoading && <div>Loading...</div>}
                    {data && data.features.length > 0 && <div className="container">
                        {data.features.map((item: any, index: any) => (
                            <>
                                <input type="radio" name="radio-buttons" id={`img-${index + 1}`} checked />
                                <li className="slide-container">
                                    <div
                                        className="brand-container"
                                        style={{
                                            background: item?.title?.includes("Astonishing") ? "lightgreen"
                                                : item?.title?.includes("Be hooked") ? "coral"
                                                    : item?.title?.includes("best things in life") ? "slateblue"
                                                        : item?.title?.includes("thump never ends") ? "darkorange"
                                                            : item?.title?.includes("Being globally you") ? "indianred"
                                                                : item?.title?.includes("For the wise") && "skyblue"
                                        }}
                                    >
                                        <div className="child-container">
                                            <div className="content">
                                                <div>
                                                    <img src={item?.logo} />
                                                </div>
                                                <div className="title">
                                                    {item?.title}
                                                </div>
                                                <div>
                                                    {item?.desc}
                                                </div>
                                            </div>
                                            <div>
                                                <img className="imageC" src={item?.image} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-controls">
                                        <label htmlFor={`img-${index - 1}`} className="prev-slide">
                                            <span>&lsaquo;</span>
                                        </label>
                                        <label htmlFor={`img-${index + 1}`} className="next-slide">
                                            <span>&rsaquo;</span>
                                        </label>
                                    </div>
                                </li>
                            </>
                        ))}
                    </div>}
                    <div className="carousel-dots">
                        <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
                        <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
                        <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
                        <label htmlFor="img-4" className="carousel-dot" id="img-dot-4"></label>
                        <label htmlFor="img-5" className="carousel-dot" id="img-dot-5"></label>
                        <label htmlFor="img-6" className="carousel-dot" id="img-dot-6"></label>
                    </div>
                </ul>
            </div>
        </div>
        </Wrapper>
    )
};

export default LoginPage;