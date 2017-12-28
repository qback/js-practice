class Github {
  constructor() {
    this.repos_count = 3;
    this.repos_sort = 'created: asc';
  }

  async getProfile(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    const profile = await profileResponse.json();

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`
    );
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    };
  }
}
