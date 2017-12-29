class Weather {
  constructor(city, state) {
    this.api_key = '86ae300fd5700731';
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.wunderground.com/api/${this.api_key}/conditions/q/${this.state}/${this.city}.json`
    );
    const responseData = await response.json();
    return responseData.current_observation;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
