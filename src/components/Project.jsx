import ProjLink from "./ProjLink.jsx";

function Project({project}) {

    const links = project.links

    return (
        <div className="relative bg-highlight rounded-2xl aspect-1/1.25 h-full border-border border-[0.5px] overflow-clip">
            <div className="bg-panel border-b-border border-[0.5px] w-full aspect-1.75/1 flex justify-center items-center">
                <img className="" src={project.image} alt="Project Image"/>
            </div>
            <div className="w-full text-white text-4xl font-mono p-2">{project.name}</div>
            <div className="text-white text-lg font-mono p-2">{project.description}</div>
            <div className="absolute m-4 bottom-0 left-0 h-1/7 flex justify-center items-center">
                {links.map((link) =>
                    <ProjLink link={link} />
                )}
            </div>
        </div>
    )
}

export default Project;