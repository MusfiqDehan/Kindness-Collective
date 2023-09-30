import Card from "./Card";

const CardsContainer = ({ cards, searchResults }) => {
    console.log(cards);
    return searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-20 justify-items-center">
            {searchResults.map((card) => {
                return <Card key={card.id} card={card} />;
            })}
        </div>
    ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-20 justify-items-center">
            {cards.map((card) => {
                return <Card key={card.id} card={card} />;
            })}
        </div>
    );
};

export default CardsContainer;
