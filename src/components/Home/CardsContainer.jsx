import Card from "./Card";
import { useLoaderData } from "react-router-dom";

const CardsContainer = () => {
    const cards = useLoaderData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-20 justify-items-center">
            {cards.map((card) => {
                return <Card key={card.id} card={card} />;
            })}
        </div>
    );
};

export default CardsContainer;
