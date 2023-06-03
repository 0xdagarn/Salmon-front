import React from "react";

import "./App.css";
import "./utils/reset.css";

import { GlobalStyle } from "./utils/styles";
import { COLORS } from "./utils/colors";
import { Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import Header from "./components/global/Header";

const Body = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${COLORS.black};
`;

const Inner = styled.div`
    width: 100%;
    height: 100%;

    max-width: 1440px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function App() {
    return (
        <Body>
            <Inner>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Inner>
        </Body>
    );
}

export default App;
