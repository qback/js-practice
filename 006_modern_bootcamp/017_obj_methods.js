const restaurant = {
  name: 'r52',
  guestCapacity: 75,
  guestCount: 0,
  checkAviliability(partySize) {
    return this.guestCapacity - this.guestCount - partySize < 0 ? 'МестОв нет' : 'Прошу к нашему шалашу';
  },
  seatParty(partySize) {
    this.guestCount += partySize;
  },
  removeParty(partySize) {
    this.guestCount -= partySize;
  }
};

restaurant.seatParty(70);
console.log(restaurant.checkAviliability(6));
restaurant.removeParty(10);
console.log(restaurant.checkAviliability(6));
