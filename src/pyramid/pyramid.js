const {Deck, Stack} = require('./deck');

class Pyramid {
  constructor() {
    this.initialize();
    this.setup();
  }

  // Only use this function to play
  isMatch(card1, card2 = {value: 0, active: true}) {
    // Check if both cards are active and equal to 13;
    if (!(card1.active && card2.active)) return false;
    if (card1.value + card2.value !== 13) return false;

    this.discard.add([Object.assign(card1), Object.assign(card2)]);
    card1 = false;
    card2 = false;

    // Check if the topCard was used in the match
    // Replace it with the last card put in the pile if so
    if (this.topCard === false) {
      this.topCard = this.pile.draw();
      this.topCard.active = true;
    }

    this.findActive();
    return true;
  }

  initialize() {
    this.pyramid = [
      [...Array(1)],
      [...Array(2)],
      [...Array(3)],
      [...Array(4)],
      [...Array(5)],
      [...Array(6)],
    ];
    this.stock = new Deck();
    this.stock.reset();
    this.stock.shuffle();

    this.pile = new Stack();
    this.discard = new Stack();
    this.reserve = [...Array(6)];
    this.topCard = {};
  }

  setup() {
    this.pyramid = this.pyramid.map((row) => {
      return row.map(() => this.stock.deal());
    });
    this.pyramid[5].forEach((card) => card.active = true);
    this.reserve = this.reserve.map(() =>
      Object.assign(this.stock.deal(), {active: true})
    );
    this.topCard = this.stock.deal();
    this.topCard.active = true;
  }

  draw() {
    this.topCard.active = false;
    this.pile.add(this.topCard);

    this.topCard = this.stock.deal();
    this.topCard.active = true;
  }

  findActive() {
    for (let i = 0; i < 5; i++) {
      this.pyramid[i].forEach((card, j) => {
        if (
          card !== false
          && this.pyramid[i+1][j] === false
          && this.pyramid[i+1][j+1] === false
        ) {
          card.active = true;
        }
      });
    }
  }
}

module.exports = Pyramid;
