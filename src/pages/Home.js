import React, {useState} from 'react'
import styled, {css} from "styled-components";
import PageView from "../components/global/PageView.js";
import SizeBox from "../components/utils/blocks/SizeBox";
import {COLORS} from "../utils/colors";
import {Tag} from "../components/global/Tag";
import Row from "../components/utils/blocks/Row";
import BottomSlider from "../components/global/BottomSlider";

const Container = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
`;

const tagData = [
    'Russia',
    'Ukraine',
    'Soldiers',
    'Drone Footages',
    'Kyiv',
    'Vladimir Putin',
    'Shelling',
    'allies',
    'Zelensky',
];

function Home() {
    const [tags, setTags] = useState(tagData);
    const [percent, setPercent] = useState(Math.floor(Math.random() * 101));

    const shuffleTagData = () => {
        const shuffledArray = [...tags].sort(() => Math.random() - 0.5);
        setTags(shuffledArray);
    }

    const randomPercent = () => {
        setPercent(Math.floor(Math.random() * 101));
    }

    return (
        <Container>
            <Row fullWidth={true} jCenter={true}>
                {tags.map((tag, index) => {
                    let random = Math.floor(Math.random() * 2);
                    return (
                        <Row>
                            <Tag key={index} active={random}>
                                {tag}
                            </Tag>
                        </Row>
                    );
                }
                )}
            </Row>
            <SizeBox h={40}/>

            <PageView onChange={() => {
                // shuffleTagData();
                randomPercent();
            }}/>

            <SizeBox h={56}/>
            <BottomSlider percent={percent}/>
        </Container>
    )
}

export default Home;