import { navigate } from '@reach/router'
import React from 'react'
import HomeButton from './HomeButton'
import RecentPolls from './RecentPolls'
import TopPolls from './TopPolls'

const Home = () => {
    const navigateToForm = () => {
        navigate("/createQuestion")
    }
    return (
        <div>
        <HomeButton path="/" name="Create your own Poll" click={navigateToForm} />
        <div style={{display:'flex', justifyContent:'space-around', border: 'none', marginTop: '30px', backgroundColor:'white'}}>
                    
                    <TopPolls />
            <RecentPolls />
        
        </div>
        </div>
    )
}

export default Home
