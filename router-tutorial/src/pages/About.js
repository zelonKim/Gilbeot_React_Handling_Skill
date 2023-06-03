/* import { useLocation } from 'react-router-dom'

    const About = () => {
        const location = useLocation();

    return (
        <div>
            <h1>Intro</h1>
            <p>Let`s use React Router</p>
            <p>QueryString: {location.search}</p>
        </div>
    )
}
export default About
// 주소창에 http://localhost:3000/about?detail=true&mode=1을 입력하면 
// 화면에 QueryString: ?detail=true&mode=1가 출력됨. */

////////////////

import {useSearchParams} from 'react-router-dom';

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail')
    const mode = searchParams.get('mode')

    const onToggleDetail = () => {
        setSearchParams({mode, detail: detail === 'true' ? false : true})
    }

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParams({mode: nextMode, detail})
    }

    return (
        <div>
            <h1>Intro</h1>
            <p>Let`s use React Router</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode plus</button>
        </div>
    )
}
export default About
// 주소 표시줄이 http://localhost:3000/about?mode=2&detail=true 일 경우, 화면에 아래와 같이 출력됨.
// detail: true
// mode: 2

// Toggle detail 버튼을 누르면 detail: false로 바뀜.
// mode plus 버튼을 누르면 mode: 옆의 숫자가 1씩 증가함.
