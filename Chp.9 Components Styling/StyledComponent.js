import styled, { css } from 'styled-components';

const sizes = {
    desktop: 1024,
    tablet: 768
}

// size 객체에 따라 자동으로 media 쿼리 함수를 만든다
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }`;
    return acc;
}, {});

const Box = styled.div `
    /* props로 넣어준 값을 직접 전달할 수 있다. */
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: felx;

    /* 가로가 1024px에 가운데 정렬 
       가로가 작이자면 크기를 줄임
       768px 미만이 되면 꽉 채움  */
    width: 1024px;
    margin: 0 auto;
    ${media.desktop `width: 768px;`}
    ${media.tablet `width: 100%;`}
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    /* & 문자를 사용하여 Sass처럼 자기 자신을 선택 가능하다. */
    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    ${props =>
        props.inverted &&
        css `
            background: none;
            border: 2px solid white;
            color: white;
            &:hover {
                background: white;
                color: black;
            }
        `};
    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponent = () => {
    <Box color='black'>
        <Button>안녕하세요</Button>
        <Button inverted={true}>테투리만</Button>
    </Box>
};

export default StyledComponent;