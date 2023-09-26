import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const {
        id,
        title,
        imgUrl,
        category,
        categoryBgColor,
        categoryTextColor,
        cardBgColor,
        cardTextColor,
    } = card;
    return (
        <>
            <Link to={`/donations/${id}`}>
                <div
                    key={id}
                    className={"card w-80 shadow-xl"}
                    style={{
                        backgroundColor: `${cardBgColor}`,
                        color: `${cardTextColor}`,
                    }}
                >
                    <figure>
                        <img src={imgUrl} alt={title} />
                    </figure>
                    <div className={"card-body"}>
                        <div
                            style={{
                                backgroundColor: `${categoryBgColor}`,
                                color: `${categoryTextColor}`,
                            }}
                            className={"badge p-3 border-none"}
                        >
                            {category}
                        </div>
                        <h2 className={"card-title"}>{title}</h2>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Card;
