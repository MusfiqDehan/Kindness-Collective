import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CardsContainer from "../components/Home/CardsContainer";
import Header from "../components/Home/Header";

const Home = () => {
    const cards = useLoaderData();

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // useEffect(() => {
    //     const filteredResults = cards.filter(
    //         (card) => card.category.toLowerCase() === searchQuery.toLowerCase()
    //     );
    //     setSearchResults(filteredResults.reverse());
    // }, [cards, searchQuery]);

    const handleClickToSearch = () => {
        const filteredResults = cards.filter((card) =>
            card.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredResults.reverse());
    };

    return (
        <>
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleClickToSearch={handleClickToSearch}
            />
            <CardsContainer cards={cards} searchResults={searchResults} />
        </>
    );
};

export default Home;
