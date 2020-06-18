import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import { useSpring } from "react-spring/three";
import { Canvas } from "react-three-fiber";

import Scene from "./scene";

import "./styles.css";


function App() {

    const [{ top }, set] = useSpring(() => ({ top: 0 }));

    const onScroll = useCallback(event => set({ top: event.target.scrollTop }), [set]);

    return (
    <>
        <Canvas>
            <Scene top={ top } />
        </Canvas>
        <div className="scroll-container" onScroll={ onScroll } >
            <div style={{ height: "300vh" }} />
        </div>

    </>
    );

}

ReactDOM.render(<App />, document.getElementById("root"));
