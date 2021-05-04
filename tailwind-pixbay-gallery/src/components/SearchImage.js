import React, {useState} from 'react';

const SearchImage = () => {
    const [text, setText] = useState('');
    
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form action="" className="w-full max-w-sm">
                <div className="flex item-center border-b border-b-2 border-blue-500 py-2">
                    <input onChange={e => setText(e.target.value)} type="text" placeholder="Search Image Term..." className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leadting-tight focus:outline-none"/>
                    <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchImage;
