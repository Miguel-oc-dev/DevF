import SongList from "../src/Components/SongList"
import SongDetail from "../src/Components/SongDetail"
import { SongProvider } from "../src/Context/SongContext"
import './home.css'
import Header from "../src/Components/Header"

const Home = () => {
    return (
        <SongProvider>
        <Header />
        <div className='home-container'>
        <div className='left'>
            <p>Song List</p>
            <SongList />
        </div>
        <div className='right'>
            <p>Song Detail</p>
            <SongDetail />
        </div>
        </div>
    </SongProvider>
    )
}

export default Home