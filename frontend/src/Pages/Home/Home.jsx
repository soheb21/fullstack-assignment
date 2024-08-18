import React from 'react'
import "./Home.css"
import Layout from '../../components/Layout/Layout'
import Cards from '../../components/Cards/Cards'
import Header from '../../components/Header/Header'

const Home = ({ setQuery }) => {
    return (
        <Layout>
            {/* header */}
            <Header setQuery={setQuery} />
            {/* main */}
            <Cards />
        </Layout>

    )
}

export default Home