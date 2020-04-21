import React from 'react';
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

const override = css`
    display: block;
    margin: 0 auto;
`;

export default (props) => (
    <div className="sweet-loading">
        <HashLoader
            css={override}
            size={50}
            color={"ff001f"}
            loading={props.isLoading}
        />
    </div>
)
