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
      <div className="relative w-[260px] h-[268px] mx-auto mt-2 pt-2 recordSpin">
        <img
          src={src}
          alt={alt}
          className="record"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }


const MusicComp: React.FC<{song: SongInfo | null}> = ({ song }) => {

    return (
        <div className="px-4 items-center flex flex-col">
            <div className="w-full text-center bg-th-midground mt-3 p-4 text-xl font-semibold "> 
                My music pallette :)
            </div>
            {
                song && song.isPlaying ? (
                    <div className="w-full text-center mt-2 relative text-[#3D4927]">
                        <p>I'm currently listening to </p>
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
                        <p>{song.title} by {song.artist}</p>
                        {/* <p>Album: {song.album}</p> */}
                    </div>
                ) : ( song && !song.isPlaying ? 
                    (
                        <div className="w-full text-center mt-2 relative text-[#3D4927]">
                            <p>Not currently playing anything but here's a song I like </p>
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
                            <p>{song.title} by {song.artist}</p>
                            {/* <p>Album: {song.album}</p> */}
                        </div>
                    ) : (
                        <div className="w-full text-center bg-th-midground mt-3 p-4">
                            Ah there is an issue finding a song to show, my apologies!
                        </div>
                    )
                )
            }
        </div>
    )
}

export default MusicComp;