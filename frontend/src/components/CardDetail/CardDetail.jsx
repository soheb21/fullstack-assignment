import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import "./CardDetail.css"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCardByIdAsync } from '../../store/card/cardAPI'

const CardDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { card_detail, loading, error } = useSelector((state) => state.card)
    useEffect(() => {
        dispatch(getCardByIdAsync(id));

    }, [id])

    return (
        <Layout>
            {
                loading
                    ? <h1 style={{ textAlign: "center", padding: "1rem" }}>Loading....</h1>
                    : <div className='detail-container'>
                        <h1>Title: <span>{card_detail?.title}</span></h1>
                        <h1>Description: <span>{card_detail?.description}</span></h1>
                    </div>
            }
            {
                error && <h1 style={{ color: "red", marginBottom: "1rem", textAlign: "center" }}>{error}</h1>
            }

        </Layout>

    )
}

export default CardDetail