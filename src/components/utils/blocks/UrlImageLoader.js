import React from "react";
import ImageLoader from "./ImageLoader";
import styled from "styled-components";

const EmptyImg = styled.div`
  width: ${props => `${props.w}px`};
  height: ${props => `${props.w}px`};

  border-radius: ${props => props.round};
`;

function UrlImageLoader({w = 84, round = '8px', imgUrl}) {
    if (imgUrl === '' || imgUrl === undefined || imgUrl === null) {
        return (
            <EmptyImg w={w} round={round}/>
        );
    }
    return (
        <ImageLoader w={w} round={round} src={imgUrl}/>
    );
}

export default UrlImageLoader;