
import React, { useRef, useState } from "react";
import { a } from "react-spring/three";
import { useFrame } from "react-three-fiber";


function Cube({ position, color }) {

    const ref = useRef();

    const [isHovering, setIsHovering] = useState(false);

    useFrame(() => {
        ref.current.rotation.x = ref.current.rotation.y += 0.01;
    });

    return (
        <mesh
        ref={ ref }
        position={ position }
        scale={ isHovering ? [1.5, 1.5, 1.5] : [1, 1, 1] }
        onPointerOver={ (e) => { setIsHovering(true); } }
        onPointerOut={ (e) => { setIsHovering(false); } }>
            <boxBufferGeometry attach="geometry" args={ [1, 1, 1] } />
            <meshStandardMaterial attach="material" color={ color } />
        </mesh>
    );

}

function Cubes({ position }) {

    return (
        <a.group position={ position } >
            <ambientLight />
            <pointLight position={ [10, 10, 10] } />
            <Cube position={ [0, 0, 0] } color={ "hotpink" } />
            <Cube position={ [2, -3, 0] } color={ "purple" } />
            <Cube position={ [-2, -6, 0] } color={ "green" } />
            <Cube position={ [2, -9, 0] } color={ "blue" } />
            <Cube position={ [-2, -12, 0] } color={ "yellow" } />
        </a.group>
    );

}

export default function Scene({ top }) {

    return (
        <Cubes position={ top.interpolate(top => [0, 0 + top * 0.008, 0]) } />
    );

}