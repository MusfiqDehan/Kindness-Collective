import React, { useEffect, useState } from "react";
import Card from "../components/Donation/Card";

const Donations = () => {
    const [favorites, setFavorites] = useState([]);
    const [noFound, setNofound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

        if (favoriteItems.length > 0) {
            setFavorites(favoriteItems);

            const total = favoriteItems.reduce(
                (preValue, currentItem) => preValue + currentItem.price,
                0
            );

            console.log(total);
        } else {
            setNofound("No Data Found");
        }
    }, []);

    const handleDelete = (id) => {
        const newFavorites = favorites.filter((donation) => donation.id !== id);
        setFavorites(newFavorites);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
    };

    return (
        <div>
            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center text-xl">
                    {noFound}
                </p>
            ) : (
                <div>
                    <div className="min-h-[80vh] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                        {favorites
                            .slice(0, isShow ? favorites.length : 4)
                            .map((donation) => (
                                <Card
                                    key={donation.id}
                                    donation={donation}
                                    handleDelete={handleDelete}
                                />
                            ))}
                    </div>

                    {!isShow && favorites.length > 4 && (
                        <button
                            onClick={() => setIsShow(true)}
                            className="btn btn-primary text-white block mx-auto my-10"
                        >
                            See more
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Donations;
