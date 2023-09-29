import { Link } from "react-router-dom";

const Card = ({ donation }) => {
    const {
        id,
        title,
        imgUrl,
        price,
        category,
        categoryBgColor,
        categoryTextColor,
        cardBgColor,
        cardTextColor,
        btnBgColor,
        btnTextColor,
    } = donation;
    return (
        <div>
            <div
                className="card card-side bg-base-100 shadow-xl"
                style={{
                    backgroundColor: `${cardBgColor}`,
                    color: `${cardTextColor}`,
                }}
            >
                <figure>
                    <img src={imgUrl} alt={title} />
                </figure>
                <div className="card-body">
                    <div
                        style={{
                            backgroundColor: `${categoryBgColor}`,
                            color: `${categoryTextColor}`,
                        }}
                        className="badge border-none"
                    >
                        {category}
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <p>${price}</p>
                    <div className="card-actions">
                        <Link to={`/donation/${id}`}>
                            <button
                                className="btn"
                                style={{
                                    backgroundColor: `${btnBgColor}`,
                                    color: `${btnTextColor}`,
                                }}
                            >
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
