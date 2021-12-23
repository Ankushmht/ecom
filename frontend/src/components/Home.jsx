import React from 'react'
import Cards from './Cards/Cards'
import Filter from './Filters/Filter'
import './layout/Content.css'

const Home = () => {
    return (
        <>
            <div>
                <div class="content">
                    <span class="filter"><Filter /></span>
                    <span class="cards"><Cards/></span>
                </div>
            </div>
        </>
    )
}

export default Home
