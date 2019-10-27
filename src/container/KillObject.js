import React, { Component } from 'react';
import styled from 'styled-components'

const KillObject = props => {
    const [count, setCount] = React.useState(props.top)
    const requestRef = React.useRef();
    const previousTimeRef = React.useRef();

    const animate = time => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            setCount(prevCount => {
                const nextPosition = prevCount + deltaTime * 0.1
                props.updatePosition(nextPosition, props.text)
                if (nextPosition > window.innerHeight) {
                    return -50
                }
                return nextPosition
            });
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    }

    React.useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return <Container style={{ top: count, left: props.left }}>{props.text}</Container>
}


export default KillObject

KillObject.defaultProps = {
    alive: true,
    left: 0,
    top: -50
}
const Container = styled.div`
   position: absolute;
   padding: 5px;
   background-color: green;
   color: white;
   text-align: center;
   font-size: 20px;
`;