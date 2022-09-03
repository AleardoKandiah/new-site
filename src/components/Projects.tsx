import "./Projects.css"

import Purnell from "./project-images/Purnell.png"
import Ordle from "./project-images/Ordle.png"
import GitHub from "./project-images/GitHub.png"
import Philmnight from "./project-images/Philmnight.png"

export function Projects() {
    return (
        <>
            <h2>Notable Projects</h2>
            <div className="Projects">
                <Project
                    name="Listen"
                    link="https://github.com/AleardoKandiah/listen"
                    image_url={Purnell}
                    description="A Discord music bot based on Rythm proficiency" />
                <Project
                    name="Ordl"
                    link="https://ordl-app.herokuapp.com/"
                    image_url={Ordle}
                    description="A procedurally generated wordle spin-off with keyboard support" />
                <Project
                    name="Retinal Segmentation"
                    link="https://github.com/AleardoKandiah/Semantic-Segmentation-of-retinal-disease-images"
                    description="A Neural Network model for medical image segmentation of the retina" />
                <Project
                    name="NextJS chat-app"
                    link="https://github.com/AleardoKandiah/nextjs_chat_app"
                    description="A Next-JS chat app with clean UI"
                    image_url={Philmnight} />
            </div>
        </>
    )
}

interface ProjectProps {
    name: string
    description: string
    link: string
    image_url?: string
}

function Project(props: ProjectProps) {
    const image_url = props.image_url !== undefined ? props.image_url : GitHub
    return (
        <a href={props.link} target="_blank" rel="noreferrer" className="Project" >
            <div className="ProjectInner">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            <img src={image_url} alt={`Screenshot of the ${props.name} project`} />
        </a>
    )
}
