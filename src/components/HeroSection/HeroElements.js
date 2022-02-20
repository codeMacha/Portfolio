import styled from 'styled-components'

export const HeroContainer = styled.div`
    background:#0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    display: flex;
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position:absolute;
    display: flex;
    flex-direction: column;
    align-items: justify;

`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 50px;
    text-align: center;
    
    @media screen and (max-width: 760px){
        font-size: 35px;
    }

    @media screen and (max-width: 480px){
        font-size: 28px;
    }
`
export const HeroH2 = styled.h2`
    color: #fff;
    font-size: 30px;
    text-align: center;

    @media screen and (max-width: 760px){
        font-size: 30px;
    }

    @media screen and (max-width: 480px){
        font-size: 26px;
    }
`

export const HeroP = styled.p`
    color: #fff;
    padding-right: 0px;
    font-size: 24px;
    text-align: center;
    margin-left: 0;
    margin-right: 0;

    @media screen and (max-width: 760px){
        font-size: 28px;
    }

    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`