import Card from "./Card";
import { useState, useEffect } from "react";

const CardsContainer = ({ cards, searchResults }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-20 justify-items-center">
                    {searchResults.length > 0
                        ? searchResults.map((card) => {
                              return <Card key={card.id} card={card} />;
                          })
                        : cards.map((card) => {
                              return <Card key={card.id} card={card} />;
                          })}
                </div>
            )}
        </>
    );
};

export default CardsContainer;
