import Project from "../../components/Project.jsx";

const projects = [
    {
        name: "QOChat",
        image: "https://cdn.niqbit.com/projects/QOChat.png",
        description: "refining the chat design with LuckyPerms integration.",
        links: [
            {method: "git", link: "https://github.com/TheFoxyyDev/QOChat"}
        ]
    },
    {
        name: "Aqanik Minecraft",
        image: "https://cdn.niqbit.com/projects/AqanikMC.png",
        description: "A little Minecraft server for a Discord community",
        links: [
            { method: "copy", link: "aqanik.niqbit.com" }
        ]
    },
    {
        name: "BetterHomes",
        image: "https://cdn.niqbit.com/projects/BetterHomes.png",
        description: "An alternative Homes system for managing Homes on Vanilla+ Servers",
        links: [
            {method: "git", link: "https://github.com/TheFoxyyDev/BetterHomes"},
            {method: "curseforge", link: "https://www.curseforge.com/minecraft/bukkit-plugins/betterhomes"},
            {method: "modrinth", link: "https://modrinth.com/plugin/betterhomes"}
        ]
    }
]

function Projects() {
    return (
        <div className="bg-background fixed w-full h-full flex justify-center items-center">
            <div className="w-[90%] h-[80%] flex flex-col justify-between items-center p-16">
                <div className="text-9xl text-white font-mono">my projects</div>
                <div className="w-full h-[70%] flex justify-evenly items-center">
                    {projects.map((proj) =>
                        <Project project={proj}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects