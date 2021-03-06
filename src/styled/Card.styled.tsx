import styled from 'styled-components';

interface CardProps {
    isFlipped?: boolean;
    isComplated?: boolean;
    src?: string;
    alt?: string;
}


export const CardRow = styled.div`
    display: grid;
    
    @media(min-width: ${({theme}) => theme.mobile}) {
        grid-template-columns: repeat( auto-fill, minmax(120px, 1fr) );
        grid-gap: 20px;
        margin: 50px 0;
    }
    @media(max-width: ${({theme}) => theme.mobile}) {
        grid-template-columns: auto auto auto auto auto;
        grid-gap: 10px;
        margin: 20px 0;
        padding: 0 0.5rem;
    }
    max-width: 100%;
    justify-content: space-between;
`;

export const Card = styled.div`
    width: 120px;
    height: 120px;
    background-color: antiquewhite;
    border-radius: 12px;
    cursor: pointer;
    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 50px;
        height: 50px;
    }
`;

export const CardInner = styled.div<CardProps>`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transform: rotateY(${props => props.isFlipped ? '180deg' : '0deg'});
    border-radius: 12px;
    border: 1px solid ${({isComplated}) => isComplated ? 'orange' : 'none'};
`;

const CardFrontandBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;  
    border-radius: 12px;
`;

export const CardFront = styled(CardFrontandBack)`
    background-color: #F4F5F7;
    color: lightgray;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 3.5rem;
        font-weight: bold;
        margin: 0;
    }
`;

export const CardBack = styled(CardFrontandBack)`
    background-color: #F4F5F7;
    color: white;
    transform: rotateY(180deg);
    border-radius: 12px;
    padding: 15px;
    @media(max-width: ${({theme}) => theme.mobile}) {
        padding: 5px;
    }
`;



export const CardImage = styled.img<CardProps>`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: contain;
    object-position: center;
    filter: ${({isComplated}) => isComplated ? 'grayscale(80%)' : 'none'};
`;

