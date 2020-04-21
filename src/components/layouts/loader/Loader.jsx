import React from 'react';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
    display: block;
    margin: 0 auto;
    padding: 20px;
`;

export default (props) => (
    <div className="sweet-loading">
        <ClipLoader
            css={override}
            size={50}
            color={"ff001f"}
            loading={props.isLoading}
        />
    </div>
)
