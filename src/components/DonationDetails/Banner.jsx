const Banner = ({ donation }) => {
    const { price, imgUrl } = donation;
    return (
        <div>
            <img src={imgUrl} alt="" />
            <h2>{price}</h2>
        </div>
    );
};

export default Banner;
