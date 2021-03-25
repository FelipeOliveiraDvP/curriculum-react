import styled from 'styled-components';

export const Header = styled.header`
    height: 20vh;
    background: #555488;    
`;

export const Main = styled.main`
    height: 80vh;

    @media(max-width: 414px) {
        height: 100%;
    }
`;

export const Footer = styled.footer`
    padding: 15px;    
    text-align: center;
    font-weight: 500;
    color: #ffffff;
    background-image: linear-gradient(to right, #5A5789 , #2D2C45);
`;

export const Overlay = styled.div`
    margin-top: -50px;
`;

export const Card = styled.div`
    background-color: ${props => props.type === 'form' ? '#ffffff' : '#EBF0F5'};
    border-radius: 8px;
    border: 1px solid #C4C8CC;
    ${props => props.type !== 'form' ? 
    'border-top: 15px solid #C4C8CC;' : 
    ''}
    padding: 20px;
    height: 100%;    

    & h2 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    & h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
`;

export const Button = styled.button`
    background: #3570B2;
    padding: 5px 15px;
    color: #ffffff;
    border-radius: 20px;
    border: none;
    cursor: pointer;

    &:disabled {
        background: #e7e7e7;
    }
`;

export const Group = styled.div`
    & label,
    & span {
        display: block;
    }

    & label {
        margin-bottom: 0;
    }

    & span {
        font-weight: 500;
        margin-bottom: 15px;
    }
`;