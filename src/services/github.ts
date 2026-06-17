export async function getGithubProjects() {
    const response = await fetch(
        'https://api.github.com/users/NathanPinaffi/repos'
    );

    const repos = await response.json();

    return repos.map((repo: any) => ({
        title: repo.name,
        description:
            repo.description || "Projeto sem descrição.",
        image: `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`,
        stack: repo.language ? [repo.language] : [],
        github: repo.html_url,
        demo: repo.homepage || "#",
        stars: repo.stargazers_count,
    }));
}