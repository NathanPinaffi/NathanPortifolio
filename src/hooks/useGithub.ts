import { useEffect, useState } from "react";

interface Repo {
    id: number;
    name: string,
    description: string,
    html_url: string,
    language: string,
    stargazers_count: number;
}

export function useGithubRepos() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const response = await fetch(
                    "https://api.github.com/users/NathanPinaffi/repos"
                );

                const data = await response.json();

                const sortedRepos = data.sort(
                    (a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count
                );

                setRepos(sortedRepos);
            } catch(error) {
                console.error(error);
            } finally {
                setLoading(false)
            }
        }

        fetchRepos();
    }, []);

    return { repos, loading }
}