import {useParams} from "react-router";
import games from "../helpers/getGames.js";
import {Ruffle} from "react-ruffle";
import {motion} from 'framer-motion';
import { useRef, useState, useEffect } from "react";

function Game() {
    const { gameDirectory } = useParams();
    const game = games.find(g => g.directory === gameDirectory)
    const containerRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleFullscreen = async () => {
        if (!containerRef.current) return;

        try {
            if (document.fullscreenElement) {
                await document.exitFullscreen();
            } else {
                await containerRef.current.requestFullscreen();
            }
        } catch (err) {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
    }, []);

    return (
        <div className="fixed w-full h-full bg-background flex justify-center items-center">
            <div
                className="relative w-[70%] aspect-video top-5 rounded-2xl overflow-clip border-border border-[0.5px]"
            >
                <div
                    ref={containerRef}
                    className="relative w-full h-full"
                >
                    {game.method === "ruffle" && (
                        <Ruffle
                            src={`https://cdn.niqbit.com/games/${game.directory}/${game.game}`} className="relative w-full h-full"
                            config={{
                                contextMenu: "off",
                                quality: "highest"
                            }}
                        />
                    )}
                    {game.method === "iframe" && (
                        <div className="w-full h-full">
                            <iframe src={game.game} className="w-full h-full" />
                        </div>
                    )}
                    {!isFullscreen && (
                        <motion.div
                            className="absolute bg-panel w-[4.5%] aspect-square z-2 bottom-0 right-0 m-[1.5%] opacity-50 rounded-lg border-border border cursor-pointer"
                            whileHover={{ opacity: 0.8, scale: 1.05 }}
                            onClick={handleFullscreen}
                            transition={{ type: "spring", stiffness: 500, damping: 30}}
                        >
                            <img src="/public/icons/fullscreen.png" alt="fullscreen"/>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Game;