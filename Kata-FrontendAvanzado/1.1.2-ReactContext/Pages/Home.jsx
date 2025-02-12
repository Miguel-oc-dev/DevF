import SongList from "../Components/SongList"
import SongDetail from "../Components/SongDetail"
import './home.css'
const Home = () => {
    return (
        <div className="home-container">
        <div className="left">
            <p> lado izquierdo </p>
            <SongList />
        </div>
        <div className="right">
            <p>lado derecho</p>
            <SongDetail />
        </div>
        </div>
    )
}

export default Home