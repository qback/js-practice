const weather = new Weather('Boston', 'MA');
const ui = new UI();

const city = document.querySelector('#w-city');
const state = document.querySelector('#w-state');
const changeBtn = document.querySelector('#w-change-btn');

document.addEventListener('DOMContentLoaded', getWeather);
changeBtn.addEventListener('click', handleChangeBtn);

function getWeather() {
  weather
    .getWeather()
    .then(res => {
      ui.paint(res);
    })
    .catch(err => console.log('error:', err));
}

function handleChangeBtn() {
  const cityValue = city.value;
  const stateValue = state.value;
  if (cityValue === '' || stateValue === '') return;
  weather.changeLocation(cityValue, stateValue);
  getWeather();
  // for bootstrap modal
  $('#w-modal').modal('hide');
}
