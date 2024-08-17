import React from 'react'
import "./Home.css"
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Header/Header'
import Cards from '../../components/Cards/Cards'
import Footer from '../../Footer/Footer'

const Home = () => {
    return (
        <Layout>
        
            {/* header */}
            <Header />

            {/* main */}
            <Cards />

            {/* footer */}
            <Footer />

        </Layout>

    )
}

export default Home