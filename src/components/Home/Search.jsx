const Search = () => {
    return (
        <div>
            <input
                type="text"
                placeholder="Start typing to search...."
                className="input input-bordered input-primary w-full max-w-xs text-black"
            />
            <button type="submit" className="btn btn-primary">
                Search
            </button>
        </div>
    );
};

export default Search;
