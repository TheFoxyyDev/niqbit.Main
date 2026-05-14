import {motion} from 'framer-motion';

function ProjLink({link}) {

    const iconLink = `https://cdn.niqbit.com/icons/${link.method}.png`;

    return (
        <motion.div
            className="relative p-2 h-full aspect-square cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 30}}
        >
            <img className="relative h-full aspect-square bg-panel p-2 rounded-md border-border border-[0.5px]" src={iconLink} alt={link.method}/>
            <a href={link.link} className="absolute w-full h-full top-0 left-0"></a>
        </motion.div>
    )
}

export default ProjLink