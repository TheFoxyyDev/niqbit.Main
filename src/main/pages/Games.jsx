import GameButton from "../../components/GameButton.jsx";
import games from "../helpers/getGames.js";
import categories from "../helpers/getCategories.js";

function Games() {
    return (
        <div className="fixed bg-background w-full h-full overflow-y-scroll no-scrollbar">
            <div className="relative top-30 left-[5%] w-[90%] h-full flex flex-col items-center gap-5">
                {categories.map((category) => (
                    <div key={category.id} className="relative w-[90%] h-auto p-5 bg-highlight border-border border-[0.5px] rounded-2xl">
                        <div className="w-full h-15 bg-panel border-border border-[0.5px] rounded-2xl text-white text-4xl font-mono flex justify-center items-center text-center mb-4">
                            {category.name}
                        </div>
                        <div className="w-full flex gap-2">
                            {games
                                .filter(game => game.category === category.id && game.show)
                                .map((game) => (
                                    <GameButton
                                        key={game.directory}
                                        target={game.directory}
                                        gamename={game.name}
                                        image={`https://cdn.niqbit.com/games/${game.directory}/${game.thumbnail}`}
                                    />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Games;