import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
`;

export const Container = styled.div`
    display: flex;
    max-width: 450px;
    margin: 0 auto;
    align-items: center;
    overflow-x: auto;
`;

export const Control = styled.span`
    font-size: 50px;
    color: #C4C8CC;
    position: absolute;   
    cursor: pointer; 
    top: 15px;
    ${props => props.left ?
    'left: -20px;' :
    'right: -20px;'
    }
`;

export const Slide = styled.img`
    max-width: 200px;
    margin-right: 15px;
    border: 2ps solid #ffffff;
`;