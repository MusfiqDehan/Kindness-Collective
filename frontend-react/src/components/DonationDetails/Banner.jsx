import swal from "sweetalert";

const Banner = ({ donation }) => {
    const { id, title, price, imgUrl, btnBgColor, btnTextColor } = donation;

    const handleAddToFavorites = () => {
        const addedFavoritesArray = [];

        const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

        if (!favoriteItems) {
            addedFavoritesArray.push(donation);
            localStorage.setItem(
                "favorites",
                JSON.stringify(addedFavoritesArray)
            );
            swal("Good job!", "Donation added successfully!", "success");
        } else {
            const isExits = favoriteItems.find(
                (donation) => donation.id === id
            );

            if (!isExits) {
                addedFavoritesArray.push(...favoriteItems, donation);
                localStorage.setItem(
                    "favorites",
                    JSON.stringify(addedFavoritesArray)
                );
                swal("Good job!", "Donation added successfully!", "success");
            } else {
                swal("Error!", "No duplicate !", "error");
            }
        }
    };
    return (
        <div>
            <figure className="relative">
                <img className="w-full h-screen" src={imgUrl} alt={title} />
                <figcaption
                    className={
                        "bg-black h-25 absolute bottom-0 w-full bg-opacity-50 pl-10 py-10"
                    }
                >
                    <button
                        onClick={handleAddToFavorites}
                        style={{
                            backgroundColor: `${btnBgColor}`,
                            color: `${btnTextColor}`,
                        }}
                        className={"btn text-xl font-medium border-none"}
                    >
                        Donate ${price}
                    </button>
                </figcaption>
            </figure>
        </div>
    );
};

export default Banner;
