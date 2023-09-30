const Details = ({ donation }) => {
    const { title, description } = donation;

    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold my-5">{title}</h1>
            <p className="text-justify text-base">{description}</p>
        </div>
    );
};

export default Details;
