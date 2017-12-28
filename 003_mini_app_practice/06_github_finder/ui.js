class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
    this.userInput = document.querySelector('#searchUser');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2"/>
          </div>
          <div class="col-md-9 align-items-center justify-content-center row">
            <p class="display-4">Login: ${user.login}</p>
            <a href="${user.html_url}" class="btn btn-block btn-primary">Зайти на страничку</a>
          </div>
        </div>
      </div>
      <h3>Последние репозитории</h3>
      <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    const reposList = document.getElementById('repos');
    let output = '';
    repos.forEach(item => {
      output += `<li><a href=${item.html_url}>${item.name}</a></li>`;
    });
    reposList.innerHTML = output;
  }
  showAlert(message, className) {
    this.clearAlert();
    const alertDiv = document.createElement('div');
    alertDiv.id = 'alertMessage';
    alertDiv.className = className;
    alertDiv.textContent = message;
    console.log('this:', this);

    this.userInput.parentElement.insertBefore(alertDiv, this.userInput);
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const alertDiv = document.getElementById('alertMessage');
    if (alertDiv) {
      alertDiv.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
}
