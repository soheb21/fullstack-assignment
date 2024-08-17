import React from 'react'
import "./Home.css"
import Layout from '../../components/Layout/Layout'
import Cards from '../../components/Cards/Cards'
import Header from '../../components/Header/Header'

const Home = () => {
    return (
        <Layout>
            {/* header */}
            <Header />
            {/* main */}
            <Cards />
        </Layout>

    )
}

export default Home