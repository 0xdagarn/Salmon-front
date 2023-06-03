import React from "react";

import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

function Row({ aCenter, jCenter, fullWidth, fullHeight, children }) {
    return (
        <Container
            style={{
                alignItems: aCenter ? "center" : "start",
                justifyContent: jCenter ? "center" : "start",
                width: fullWidth ? "100%" : "max-content",
                height: fullHeight ? "100%" : "max-content",
            }}>
            {children}
        </Container>
    );
}

export default Row;
