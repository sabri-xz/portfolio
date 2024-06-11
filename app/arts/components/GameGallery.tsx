 'use client'

 import { useEffect, useState } from 'react';
import GameSection from './GameSection'
import { getImageDimensions } from '../../utils/getImageDim';

type Image = {
    height: number;
    width: number;
    src: string;
}

type NewGame = {
    name: string;
    thumbnailSrc?: string;
    thumbnail: Image;
    gameLink: string;
    description: string;
}

type Game = {
    name: string;
    thumbnailSrc: string;
    gameLink: string;
    description: string;
}

const GameGallery: React.FC<{gamesInfo: Game[]}> = ({ gamesInfo }) => {
    let [games, setGames] = useState<NewGame[]>();

    useEffect(() => {
        const updateGameInfo = async () => {
            const getDimension = async (src: string) => {
                try {
                    const { width, height } = await getImageDimensions(src);
                    return { src, width, height };
                } catch (error) {
                    console.error('Error loading image:', error);
                    return { src, width: 0, height: 0 };
                }
            };

            const updateGame = async (oldGame: Game) => {
                const thumbnail: Image = await getDimension(oldGame.thumbnailSrc);
                let updatedGame: NewGame = { ...oldGame, thumbnail };
                delete updatedGame.thumbnailSrc;
                return updatedGame;
            }

            const updatedGames = await Promise.all(gamesInfo.map(async (game: Game) => {
                const updatedGame = await updateGame(game);
                return updatedGame;
            }));

            setGames(updatedGames);
        };

        updateGameInfo();
    }, [gamesInfo]);

    if (!games) {
        return <div> loading games! :) </div>;
    }

    return (
        <div>
            { games.map((game: NewGame) => <GameSection game={game} />) }
        </div>
    );
}

export default GameGallery;