

const Search = ({ handleSearch }) => {


    return (
        <div className="ml-[30px] mt-5">

            <input type="text" placeholder="search.. "
                className="w-[356.77px] h-[43.91px] bg-[#EAEAEA] rounded-[10px]"
                onChange={(e) => handleSearch(e.target.value)}
            />
            
            <button className="bg-[#4285F4] w-[200px] h-[43.91px] rounded-[10px] text-[#FFFFFF] ml-[20px]">
                Search</button>

        </div>
    )
}

export default Search







