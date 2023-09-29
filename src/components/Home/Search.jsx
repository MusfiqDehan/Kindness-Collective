// Desc: Search component for the home page
const Search = ({ searchQuery, setSearchQuery, handleClickToSearch }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Start typing to search...."
                className="input input-bordered input-primary w-full max-w-xs text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClickToSearch}
            >
                Search
            </button>
        </div>
    );
};

export default Search;
