import React, {useEffect, useRef} from "react";
import {StackedCarouselSlideProps} from "react-stacked-center-carousel";
import "./Slide.css";
import {useState} from "react";
import {COLORS} from "../../utils/colors";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import Spacer from "../utils/blocks/Spacer";
import ProfileImg from "../../assets/profile-dum.png";
import ImageLoader from "../utils/blocks/ImageLoader";
import SizeBox from "../utils/blocks/SizeBox";
import UrlImageLoader from "../utils/blocks/UrlImageLoader";
import UpArrow from "../../assets/ic-up_arrow.png";
import {css} from "@emotion/react";

const colorData = [
    COLORS.blue,
    COLORS.green,
    COLORS.orange,
    COLORS.purple,
    COLORS.red,
    COLORS.yellow,
];

const Container = styled.div`
    position: relative;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 31px;

    overflow: hidden;
`;

const TopProfile = styled.div`
    position: absolute;

    width: 100%;

    left: 20px;
    top: 24px;
    margin-right: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;

    color: white;
`;

const TopUp = styled.div`
    position: absolute;

    width: max-content;

    right: 20px;
    top: 24px;

    padding: 8px 16px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 138%;
    color: white;

    border: 2px solid #FFFFFF;
    border-radius: 24px;

    ${({active = true}) => css`
        background-color: ${active ? COLORS.blue : 'transparent'};
        border: 2px solid ${active ? COLORS.blue : '#FFFFFF'};
    `}
`;

const TopBack = styled.div`
    position: absolute;

    width: 100%;
    height: 100px;

    top: 0;
    left: 0;

    background: linear-gradient(180deg, #000000 2.71%, rgba(0, 0, 0, 0) 85.8%);
`;

const BottomContainer = styled.div`
    position: absolute;

    width: 100%;
    height: max-content;

    top: 400px;
    left: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;

    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;

    padding: 25px;

    color: white;
`;

const BottomSub = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 138%;
    text-decoration-line: underline;

    color: #BDBDBD;

`;

const BottomBack = styled.div`
    position: absolute;

    width: 100%;
    height: 100px;

    bottom: 0;
    left: 0;

    background: linear-gradient(360deg, #000000 2.71%, rgba(0, 0, 0, 0) 85.8%);
`;

const Player = styled(ReactPlayer)`
    position: absolute;

    border-radius: 32px;
`;

const Video = styled.video`
    position: absolute;

    width: 120%;
    height: 100%;
`;

export const Slide = React.memo(function (StackedCarouselSlideProps) {
    const {
        data,
        dataIndex,
        isCenterSlide,
        swipeTo,
        slideIndex
    } = StackedCarouselSlideProps;

    const video = data[dataIndex].video;
    const image = data[dataIndex].image;
    const text = data[dataIndex].text;
    const user = data[dataIndex].user;

    const [colors, setColors] = useState(colorData);
    const [beforeIndex, setBeforeIndex] = useState(slideIndex);

    const shuffleColors = () => {
        const shuffledArray = [...colorData].sort(() => Math.random() - 0.5);
        setColors(shuffledArray);
    }

    const ref = useRef(null);

    // isCenterSlide.addListener((isCenter) => {
    //     if (isCenter) {
    //         const observedVideoElement = ref && ref.current;
    //         observedVideoElement.play();
    //     } else {
    //         const observedVideoElement = ref && ref.current;
    //         observedVideoElement.pause();
    //     }
    // });

    useEffect(() => {
        if (isCenterSlide) {
            const observedVideoElement = ref && ref.current;
            observedVideoElement.play();
        } else {
            const observedVideoElement = ref && ref.current;
            observedVideoElement.pause();
        }
    }, [isCenterSlide]);

    return (
        <div className="card-card" style={{border: `solid 2px ${colors[dataIndex]}`}} draggable={false}>
            <Container onClick={() => {
                if (!isCenterSlide) swipeTo(slideIndex);
            }}>
                <Video
                    ref={ref}
                    src={video}
                    autoPlay={isCenterSlide}       // 자동 재생 on
                    controls={false}       // 플레이어 컨트롤 노출 여부   // 플레이어 초기 포스터 사진
                    onEnded={() => {
                        swipeTo(slideIndex + 1);
                    }}  // 플레이어 끝났을 때 이벤트
                />
                <TopBack/>
                <TopProfile>
                    <UrlImageLoader round={100}
                                    imgUrl={`https://avatars0.githubusercontent.com/u/${Math.ceil(Math.random() * 10000)}?v=4`}
                                    w={45}/>
                    <SizeBox w={10}/>
                    {user}
                </TopProfile>
                <TopUp active={isCenterSlide}>
                    UpVote
                    <ImageLoader src={UpArrow} w={17} h={12}/>
                </TopUp>

                <BottomBack/>
                <BottomContainer>
                    {text}

                    <SizeBox w={10}/>
                    <BottomSub>
                        read more
                    </BottomSub>
                </BottomContainer>
            </Container>
        </div>
    );
});
