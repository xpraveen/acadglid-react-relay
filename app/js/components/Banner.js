import React from "react";

export default class Banner extends React.Component {

    render() {
        const style ={
            border: "1px solid red",
            color: "red",
            textAlign: "center",
            width: "60%"
        };

        return (
            <div style={style} >
                <label>Flat 20% off</label>
            </div>
        );
    }
}
