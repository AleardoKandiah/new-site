import "./GitHub.css"

import React, {useEffect, useState} from "react"

const DEFAULT_COLOR = "var(--color-1)"
const ARCHIVED_COLOR = "var(--color-4)"
const FORK_COLOR = "var(--color-2)"

interface GitHubProjectProps {
    name: string;
    description: string;
    link: string;
    fork: boolean
    archived: boolean
}

export function GitHub() {
    const [repos, setRepos] = useState<GitHubProjectProps[]>([])
    useEffect(() => {
        const fetchProjects = async () => {
            const repoData = await fetch("https://api.github.com/users/AleardoKandiah/repos")
            const repos: any[] = await repoData.json()

            setRepos(repos.map((repo) => {
                return {
                    name: repo.name,
                    description: repo.description,
                    link: repo.html_url,
                    fork: repo.fork,
                    archived: repo.archived
                }
            }))
        }

        fetchProjects()
    }, [])

    return (
        <>
            <h2>GitHub Projects</h2>
            <p className="GitHubProjectsDescription"><i>Below is a more comprehensive list of all open-source projects I have contributed to on GitHub</i></p>
            <div className="GitHubProjectKeyContainer">
                <GitHubProjectKey type="Repository" color={DEFAULT_COLOR} />
                <GitHubProjectKey type="Fork" color={FORK_COLOR} />
                <GitHubProjectKey type="Archived" color={ARCHIVED_COLOR} />
            </div>
            <div className="GitHubProjects">
                {repos.map((repo) => {
                    return <GitHubProject key={repo.name} {...repo} />
                })}
            </div>
        </>
    )
}

function GitHubProject(props: GitHubProjectProps) {
    let style: React.CSSProperties

    if (props.fork) {
        style = {
            backgroundColor: FORK_COLOR,
            color: "var(--color-1)",
        }
    } else if (props.archived) {
        style = {
            backgroundColor: ARCHIVED_COLOR,
            color: "var(--color-1)",
        }
    } else {
        style = {
            backgroundColor: DEFAULT_COLOR,
            color: "var(--color-4)",
        }
    }

    return (
        <a href={props.link} target="_blank" rel="noreferrer" className="GitHubProject" style={style}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </a>
    )
}

interface GitHubProjectKeyProps {
    type: string
    color: string
}

function GitHubProjectKey(props: GitHubProjectKeyProps) {
    return (
        <div className="GitHubProjectKey">
            <p>{props.type}</p>
            <div className="ColorSquare" style={{backgroundColor: props.color}}/>
        </div>
    )
}
