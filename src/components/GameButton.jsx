import {useNavigate} from "react-router";
import {motion} from 'framer-motion'

function GameButton(args) {
    const navigate = useNavigate();

    let nameplateVisible = false
    if (args.nameplate === "true") {
        nameplateVisible = true
    }

    return (
        <motion.div
            className="relative w-30 h-30 aspect-square bg-panel border-border border-[0.5px] rounded-lg overflow-clip cursor-pointer"
            onClick={() => navigate("/games/" + args.target)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 500, damping: 30}}
        >
            <img src={args.image} alt={args.gamename} className="absolute w-full h-full"/>
            {nameplateVisible &&
                <motion.div
                    className="relative w-full h-full flex justify-center items-end from-black bg-linear-360 opacity-0"
                    onClick={() => navigate(`/games/${args.target}`)}
                    whileHover={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30}}
                >
                        <div className=" w-full h-[40%] text-white text-sm font-mono flex justify-center items-center text-center">{args.gamename}</div>
                </motion.div>
            }
        </motion.div>
    )
}

export default GameButton