import data from "@/content/openSource.json";
import UnderlineEffect from "../underlineEffect";

export default function OpenSource() {
    return (
        <>
            {data.map((project, number) => (
                <div key={number} className="mb-[10vw] md:mb-20 grid md:grid-cols-2 grid-cols-1"
                >
                    {number % 2 === 0 ? <div className="hidden md:block"></div> : null}

                    <div className={`bg-[#242424] bg-opacity-90 backdrop-blur-md rounded-3xl ${number % 2 ? 'md:mr-10' : 'md:ml-10'}`}>
                        <div className="flex flex-col p-[10vw] md:p-[6vw] md-custom:p-12">
                            <div className="flex flex-col flex-1 pl-8 pb-5 md:text-2xl">
                                <div className="md:text-4xl max-sm:text-xl max-md:text-2xl md:text-left text-center pt-4 pb-1 uppercase flex max-md:justify-center max-md:items-center text-white">
                                    <UnderlineEffect props={{ data: project.event, link: project.link }} />
                                </div>
                                <p className="md:text-xl">{project.description}</p>
                                <p className="md:text-xl pt-4 text-white">— {project.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}