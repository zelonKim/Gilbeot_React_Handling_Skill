import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>first showing page</p>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/profiles/seongjin">seongjin`s Profile</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong`s Profile</Link>
                </li>
                <li>
                    <Link to="/profiles/john">No Profile</Link>
                </li>
                <li>
                    <Link to="/articles">Post List</Link>
                </li>
            </ul>
        </div>
    )
}
export default Home;