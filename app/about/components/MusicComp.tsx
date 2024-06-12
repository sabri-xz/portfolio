import { useState, useEffect } from "react";
import { getNowPlaying } from "../spotify/spotify";
import '../../styles/musicComp.css'
import Image from "next/image";

interface SongInfo {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
}

function Record({ src, alt }: {src:string, alt:string}) {
    return (
      <div className="relative w-[260px] h-[268px] mx-auto mt-2 pt-2">
        <img
          src={src}
          alt={alt}
          className="record"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }


const MusicComp: React.FC<{}> = () => {
    const [song, setSong] = useState<SongInfo | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const songInfo = await getNowPlaying();
            setSong(songInfo);
        };

        fetchData();
    }, []);

    return (
        <div className="px-4 items-center flex flex-col">
            <div className="w-full text-center bg-slate-400 mt-3 p-4"> I am currently listening to </div>
            {
                song && song.isPlaying ? (
                    <div className="w-full text-center mt-2 relative">
                        <p>{song.title} by {song.artist}</p>
                        <div className="relative w-full h-[275px]">
                            <Image
                                src={song.albumImageUrl} 
                                alt={`${song.album} cover`} 
                                className="album-cover-bg"
                                layout="fill" 
                                objectFit="cover"
                            />
                            <Record src={song.albumImageUrl} alt={song.album} />
                        </div>
                        <p>Album: {song.album}</p>
                    </div>
                ) : (
                    <div className="w-full text-center bg-slate-400 mt-3 p-4">
                        No song is currently playing.
                    </div>
                )
            }
        </div>
    )
}

export default MusicComp;