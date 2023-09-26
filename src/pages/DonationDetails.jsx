import { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import Banner from "../components/DonationDetails/Banner";
import Details from "../components/DonationDetails/Details";

const DonationDetails = () => {
    const [donation, setDonation] = useState({});

    const { id } = useParams();
    console.log(id);
    const donations = useLoaderData();
    console.log(donations);

    useEffect(() => {
        const findDonation = donations?.find((card) => card.id === id);
        console.log(findDonation);
        setDonation(findDonation);
    }, [id, donations]);

    return (
        <div>
            {/* <Banner donation={donation} />
            <Details donation={donation} /> */}
        </div>
    );
};

export default DonationDetails;
