import React from 'react'
import styled from 'styled-components';
import leftArrow from '../../../assets/images/left-arrow-key.svg';
import rightArrow from '../../../assets/images/right-arrow-key.svg';

const StyledArrow = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    ${direction => direction === 'right' ? `right: 25px` : `left: 25px`};
    height: 50px;
    width: 50px;
    justify-content: center;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    transition: transform ease-in 0.1s;

    &:hover {
        transform: scale(1.1);
    }

    img {
        transform: translateX(${direction => direction === 'left' ? '-2' : '2'}px);

        &:focus {
            outline: 0;
        }
    }
`

function Arrow({ direction, handleClick }) {

    return (
        <StyledArrow onClick={handleClick}>
            {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
        </StyledArrow>
    )
};

export default Arrow;