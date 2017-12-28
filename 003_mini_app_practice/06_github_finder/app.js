const userSearch = document.querySelector('#searchUser');

const github = new Github();
const ui = new UI();

userSearch.addEventListener('input', getUserInfo);

function getUserInfo(ev) {
  const searchText = ev.target.value;

  if (searchText === '') {
    ui.clearProfile();
    return;
  }

  github.getProfile(searchText).then(data => {
    if (data.profile.message === 'Not Found') {
      ui.showAlert('Такой юзер не найден', 'alert alert-danger');
    } else {
      ui.showProfile(data.profile);
      ui.showRepos(data.repos);
    }
  });
}
