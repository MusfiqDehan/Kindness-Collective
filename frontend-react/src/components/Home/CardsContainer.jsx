import Card from "./Card";
import { useState, useEffect } from "react";

const CardsContainer = ({ cards, searchResults }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(8);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = searchResults.length > 0 ? searchResults : cards;
    const totalCards = currentCards.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-20 justify-items-center">
                    {currentCards
                        .slice(indexOfFirstCard, indexOfLastCard)
                        .map((card) => {
                            return <Card key={card.id} card={card} />;
                        })}
                </div>
            )}

            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-10">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (pageNumber) => (
                            <button
                                key={pageNumber}
                                className={`mx-2 px-4 py-2 rounded-full ${
                                    pageNumber === currentPage
                                        ? "bg-gray-900 text-gray-400"
                                        : "bg-gray-400 text-gray-900"
                                }`}
                                onClick={() => handlePageChange(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        )
                    )}
                </div>
            )}
        </>
    );
};

export default CardsContainer;
