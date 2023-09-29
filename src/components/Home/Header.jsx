import Banner from "./Banner";

const Header = ({ searchQuery, setSearchQuery, handleClickToSearch }) => {
    return (
        <header>
            <Banner
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleClickToSearch={handleClickToSearch}
            />
        </header>
    );
};

export default Header;
