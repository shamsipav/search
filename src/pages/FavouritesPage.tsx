import React from 'react';
import {useAppSelector} from "../hooks/useAppSelector";
import RepoCard from "../components/RepoCard";

const FavouritesPage = () => {
    const {favourites} = useAppSelector(state => state.gitHub)

    if (favourites.length === 0) return <p className="text-center">No items.</p>
    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            <ul className="list-none">
                {favourites.map(repo =>
                    <RepoCard key={repo.id} repo={repo} />
                )}
            </ul>
        </div>
    );
};

export default FavouritesPage;