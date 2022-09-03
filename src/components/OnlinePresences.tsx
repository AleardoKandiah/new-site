import "./OnlinePresences.css"

import GitHubLogo from "./social-icons/GitHub.png"
import LinkedInLogo from "./social-icons/LinkedIn.png"

export function OnlinePresences() {
    return (
        <>
            <h2>Find me Online</h2>
            <div className="OnlinePresences">
                <OnlinePresence image_url={GitHubLogo} alt_text="GitHub Account" link="https://github.com/AleardoKandiah" />
                <OnlinePresence image_url={LinkedInLogo} alt_text="LinkedIn Account" link="https://www.linkedin.com/in/aleardo-kandiah-504959195/" />
            </div>
            <h2>Or Drop Me An Email</h2>
            <a className="Email" href="mailto:aleardotambi6@gmail.com?subject=About%20Me%20%7C%20Query">aleardotambi6@gmail.com</a>
        </>
    )
}

interface OnlinePresenceProps {
    image_url: string
    alt_text: string
    link: string
}

function OnlinePresence(props: OnlinePresenceProps) {
    return (
        <a className="OnlinePresence" href={props.link} target="_blank" rel="noreferrer">
            <div>
                <img src={props.image_url} alt={props.alt_text} />
            </div>
        </a>
    )
}
