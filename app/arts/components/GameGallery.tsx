 'use client'

import { useEffect, useState } from 'react';
import ImageCard from "@/app/arts/components/ImageCard";
import Link from "next/link";
import { getImageDimensions } from '../../utils/getImageDim';
import { ImageWithDim, Game, NewGame } from "@/app/types";

const GameGallery: React.FC<{gamesInfo: Game[]}> = ({ gamesInfo }) => {
    let [games, setGames] = useState<NewGame[]>();

    useEffect(() => {
        const updateGameInfo = async () => {
            const getDimension = async (src: string, alt: string) => {
                try {
                    const { width, height } = await getImageDimensions(src);
                    return { src, alt, width, height };
                } catch (error) {
                    console.error('Error loading image:', error);
                    return { src, alt, width: 0, height: 0 };
                }
            };

            const updateGame = async (oldGame: Game) => {
                const thumbnail: ImageWithDim = await getDimension(oldGame.thumbnailSrc, oldGame.name);
                let updatedGame: NewGame = { ...oldGame, thumbnail };
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

    let i = 0;

    return (
        <div>
            { games.map((game: NewGame, index: number) => {
                return (
                    <div key={i++} className="py-2 flex flex-row">
                        <Link href={game.gameLink} className="">
                            <ImageCard id={index} 
                                imageWidth={425}
                                img={game.thumbnail}
                            />
                        </Link>
                        <section className="flex flex-col justify-center items-start px-6">
                            <span className='font-bold text-xl underline'> {game.name} </span>
                            <p className='text-sm pb-2'> {game.caption} </p>
                            <p className='whitespace-pre-line'> {game.description} </p>
                        </section>
                    </div>
                )
            }) }
        </div>
    );
}

export default GameGallery;