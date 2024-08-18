
import { useSelector } from "react-redux";
import "./Cards.css"
import { Link } from "react-router-dom";
const Cards = () => {
    const { data, loading, error } = useSelector((state) => state.card)

    if (loading) {
        return <h1 style={{ textAlign: "center", padding: "1rem" }}>Loading....</h1>
    }

    return (
        <div className="main">
            <div className="main-container">
                {
                    error && <h1 style={{ color: "red", marginBottom: "1rem", textAlign: "center" }}>{error}</h1>

                }
                {
                    data.length > 0
                        ? data.map((card) => (
                            <Link className="card" to={`/${card._id}`} key={card._id}>

                                <h2>{card?.title}</h2>
                                <p>{card?.description}</p>

                            </Link>


                        ))
                        : <h1 style={{ textAlign: "center", padding: "1rem" }}>Not Found!!</h1>
                }



            </div>

        </div >
    );
};

export default Cards;
