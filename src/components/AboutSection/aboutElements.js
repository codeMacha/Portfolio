import styled from "styled-components";

export const AboutContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    align-items: center;
    height: 800px;
    position: relative;
    z-index: 1
`

export const AboutContent = styled.div`
    position: absolute;
    overflow: hidden;
    height: 70%;
    width: 100%
`

export const AboutTitle = styled.p`
    color: #fff;
    font-size: 40px;
    position: flex;
    text-align: center;
    vertical-align: middle;
    right: 52%;
`
export const Aboutp1 = styled.p`
    color: #fff;
    font-size: 25px;
    position: absolute;
    top: 10%;
    left: 8%;
    width: 450px;
    border: 3px solid #73AD21;
    padding: 10px;
    text-align: center;
    
`

export const Aboutp = styled.p`
    color: #fff;
    font-size: 25px;
    position: absolute;
    top: 13%;
    right: 20%;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
    text-align: center;
    
`

export const Aboutp2 = styled.p`
    color: #fff;
    font-size: 25px;
    position: absolute;
    right: 15%;
    width: 550px;
    bottom: 10px;
    border: 3px solid #73AD21;
    padding: 10px;
    text-align: center;
`

export const AboutToggle = styled.div`
    position: absolute;
    right: 50%;
    width: 50px;
    bottom: 10px;
    padding: 10px;
    align-items: center;
`