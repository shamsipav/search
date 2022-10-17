import React, {useState} from 'react';
import {IRepo} from "../types";
import {useActions} from "../hooks/useActions";
import {useAppSelector} from "../hooks/useAppSelector";

const RepoCard = ({repo}: {repo: IRepo}) => {
    const {addFavourite, removeFavourite} = useActions()
    const {favourites} = useAppSelector(state => state.gitHub)

    const [isFav, setIsFav] = useState(favourites.includes(repo))

    const addToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addFavourite(repo)
        setIsFav(true)
    }

    const removeFromFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        removeFavourite(repo)
        setIsFav(false)
    }

    return (
        <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
            <a href={repo.html_url} target="_blank">
                <h2 className="text-lg font-bold">{repo.full_name}</h2>
                <p className="text-sm">
                    Forks: <span className="font-bold mr-2">{repo.forks}</span>
                    Watchers: <span className="font-bold">{repo.watchers}</span>
                </p>
                <p className="text-sm font-thin mb-2">{repo?.description}</p>
                {!isFav && <button
                    className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
                    onClick={addToFavourite}
                >
                    Add
                </button>}
                {isFav && <button
                    className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
                    onClick={removeFromFavourite}
                >
                    Remove
                </button>}
            </a>
        </div>
    );
};

export default RepoCard;