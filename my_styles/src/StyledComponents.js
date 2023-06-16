import styled, {css} from 'styled-components'

const sizes = {
    desktop: 1024,
    tablet: 768
}

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
    }
    `
    return acc;
}, {})


const Box = styled.div`
    background: ${props => props.color || 'blue'} // props로 넣어준 값을 직접 전달해줌. // color값이 주어지지 않았을때는 blue를 기본값으로 설정함.
    padding: 1rem;
    display: flex;
    width: 1024px;
    margin: 0 auto;
    ${media.desktop`width: 768px;`}
    ${media.tablet`width: 100%;`}
`

/*  // 가로크기 1024px에 가운데 정렬을 함. 
    @media (max-width: 1024px) {
        width: 768px;
    }
    // 가로크기가 768px 미만이 되면 꽉 채움.
    @media (max-width: 768px) {
        width: 100%
    } */

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
    &: hover { // &문자를 사용하여 자기자신 선택
        background: rgba(255, 255, 255, 0.9);
        color: red;
    }
    ${props =>
        props.inverted &&  // inverted 프로퍼티 값이 true일때만 해당 스타일이 적용됨. (조건부 스타일링)
        css` // 여러 줄의 스타일 구문을 프로퍼티에 따라 조건부로 설정해야 하는 경우, css를 불러와야 함.
            background: red;
            border: 2px solid white;
            color: white;

            &: hover {
                background: white;
                color: black;
            }
            `};
        & + button {
            margin-left: 10rem; // 버튼사이의 간격
        }
    `


const StyledComponent = () => (
    <Box color="red">
        <Button >hello</Button>
        <Button inverted={true}>only boarder</Button>
    </Box>
)
export default StyledComponent