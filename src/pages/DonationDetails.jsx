import { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import Banner from "../components/DonationDetails/Banner";
import Details from "../components/DonationDetails/Details";

const DonationDetails = () => {
    const [donation, setDonation] = useState({});

    const params = useParams();
    const id = parseInt(params.id);
    const donations = useLoaderData();

    useEffect(() => {
        const findDonation = donations?.find((card) => card.id === id);
        setDonation(findDonation);
    }, [id, donations]);

    return (
        <div>
            <Banner key={donation.id} donation={donation} />
            <Details key={donation.id} donation={donation} />
        </div>
    );
};

export default DonationDetails;
