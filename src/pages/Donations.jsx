import React, { useEffect, useState } from "react";
import Card from "../components/Donation/Card";

const Donations = () => {
    const [favorites, setFavorites] = useState([]);
    const [noFound, setNofound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

        if (favoriteItems) {
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

    return (
        <div>
            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center text-xl">
                    {noFound}
                </p>
            ) : (
                <div>
                    <div className="grid grid-cols-2 gap-5">
                        {isShow
                            ? favorites.map((donation) => (
                                  <Card
                                      key={donation.id}
                                      donation={donation}
                                  ></Card>
                              ))
                            : favorites
                                  .slice(0, 4)
                                  .map((donation) => (
                                      <Card
                                          key={donation.id}
                                          donation={donation}
                                      ></Card>
                                  ))}
                    </div>

                    {favorites.length > 4 && (
                        <button
                            onClick={() => setIsShow(!isShow)}
                            className="btn btn-primary text-white block mx-auto my-10"
                        >
                            {isShow ? "See Less" : "See more"}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Donations;
