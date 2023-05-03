async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/David-V-Rullo/repos"
  );
  const repos = await response.json();
  return repos;
}

const Repos = async () => {
  const repos = await fetchRepos();
  console.log(repos);
  return (
    <div>
      <div>Repos</div>
      <div>{repos[0].name}</div>
    </div>
  );
};

export default Repos;
