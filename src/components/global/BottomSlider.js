import React from "react";
import styled from "@emotion/styled";
import Spacer from "../utils/blocks/Spacer";
import {COLORS} from "../../utils/colors";
import ImageLoader from "../utils/blocks/ImageLoader";
import Cursor from "../../assets/ic-cursor.png";
import SizeBox from "../utils/blocks/SizeBox";

const Container = styled.div`
    width: 100%;
    height: max-content;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopContainer = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    
    width: 100%;
`;

const TopCursor = styled.div`
    position: absolute;
    
    left: ${({left}) => `${left}%`};

    bottom: 0px;
    
    transition: left 0.3s ease-in-out;
    transform: translateX(-50%);
`;

const LinearGradient = styled.div`
    width: 100%;
    height: 6px;

    background: linear-gradient(90deg, #9F1D1D 0%, #DC901F 19.27%, #EBDA43 38.02%, #2CADA5 58.85%, #2E1C9A 79.17%, #6E28A5 100%);
`;

const Option = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 138%;

    color: ${({color}) => color};
`;

function BottomSlider({percent = 50}) {
    return (
        <Container>
            <TopContainer>
                <Option color={COLORS.red}>
                    PRO RUSSIAN
                </Option>
                <Spacer/>
                <Option color={COLORS.purple}>
                    PRO UKRAINE
                </Option>

                <TopCursor left={percent}>
                    <ImageLoader src={Cursor} w={37} h={37}/>
                </TopCursor>
            </TopContainer>

            <LinearGradient/>
        </Container>
    );
}

export default BottomSlider;