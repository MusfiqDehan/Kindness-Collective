import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Card = ({ donation, handleDelete }) => {
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
                <div className="card-body flex flex-row justify-between items-center">
                    <div>
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

                    <div>
                        <button className="" onClick={() => handleDelete(id)}>
                            <Icon
                                className="text-3xl text-red-600"
                                icon="octicon:trash-24"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
