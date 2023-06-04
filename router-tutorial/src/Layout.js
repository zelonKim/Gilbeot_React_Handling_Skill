/* import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
        <header style={{ background: 'lightgray', padding:16, fontSize:24 }}>
          Header 
        </header>
        <main>
            <Outlet />
        </main>
        </>
    )
}
export default Layout; */

/////////////////////

/* import {Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goArticles = () => {
        navigate('/articles')
    }

    return (
        <>
        <header style={{ background: 'lightgray', padding:16, fontSize:24 }}>
          <button onClick={goBack}>Back</button>
          <button onClick={goArticles}>Post Lsit</button> 
        </header>
        <main>
            <Outlet />
        </main>
        </>
    )
}
export default Layout;
// Back 버튼을 누르면 이전 페이지로 이동함.
// Post List 버튼을 누르면 http://localhost:3000/articles로 이동함.*/
// Home페이지 -> About페이지 -> PostList버튼 -> 뒤로가기 -> About페이지


/////////////////


import {Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goArticles = () => {
        navigate('/articles', {replace: true})
    }

    return (
        <>
        <header style={{ background: 'lightgray', padding:16, fontSize:24 }}>
          <button onClick={goBack}>Back</button>
          <button onClick={goArticles}>Post List</button> 
        </header>
        <main>
            <Outlet />
        </main>
        </>
    )
}
export default Layout;
// Home페이지 -> About페이지 -> PostList버튼 -> 뒤로가기 -> Home페이지
