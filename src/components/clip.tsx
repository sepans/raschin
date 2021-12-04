import React, { useRef, useState } from 'react'
import styled from 'styled-components'


interface ClipProps extends HTMLVideoElement {
    foo: boolean
}

export const Clip:React.FC<ClipProps> = (props) => {
    const { src, autoplay, loop, controls, width } = props
    const [ playing, setPlaying ] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const togglePlay = () => {
        if(videoRef) {
            setPlaying(!playing)
            console.log(videoRef, videoRef.current)
            if(playing) {
                videoRef?.current?.play()

            }
            else {
                videoRef?.current?.pause()
            }
        }
    }
    return (
        <Container>
            <video 
                ref={videoRef}
                autoPlay={autoplay}
                loop={loop}
                controls={controls}
                width={width}
                src={src}
                onClick={togglePlay}
            />
            <Dot />

        </Container>
    ) 
}

const Container = styled.div`
    position: relative;
    cursor: pointer;
    
`

const Dot = styled.div`
    position: absolute;
    left: 10px;
    bottom: 15px;
    z-index: 2;
    width: 10px;
    height: 10px;

    background-color: #AAA;
    border-radius: 50%;    

`