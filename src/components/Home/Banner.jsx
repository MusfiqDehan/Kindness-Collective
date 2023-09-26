import Search from "./Search";

const Banner = () => {
    return (
        <>
            <div
                className="hero min-h-[70vh]"
                style={{
                    backgroundImage:
                        "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                            Helping Peoples Worldwide
                        </h1>
                        <Search />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
