class Deck {
  constructor(deck) {
    if (deck) {
      this.deck = deck;
    } else {
      this.deck = [];
      this.reset();
    }
  }

  reset() {
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    // 1 is Ace, 11 is Jack, 12 is Queen, 13 is King
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    suits.forEach((suit) => {
      values.forEach((value) => {
        this.deck.push({
          value,
          suit,
          active: false,
        });
      });
    });
  }

  shuffle() {
    const {deck} = this;
    let m = deck.length;
    let i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      [deck[m], deck[i]] = [deck[i], deck[m]];
    }
    return this;
  }

  deal(amount = 1) {
    if (amount === 1 ) return this.deck.pop();

    const cards = [];
    for (let i = 0; i < amount; i++) {
      if (this.deck.length === 0) return cards;
      cards.push(this.deck.pop());
    }
    return cards;
  }

  add(cards) {
    this.deck = [...this.deck, ...cards];
  }
}

class Stack {
  constructor(stack = []) {
      this.stack = stack.slice();
  }

  add(cards) {
    if (!(Array.isArray(cards))) {
      cards = [cards];
    }
    this.stack = [...this.stack, ...cards];
  }

  deal(amount = 1) {
    const cards = [];
    for (let i = 0; i < amount; i++) {
      if (this.stack.length === 0) return cards;
      cards.push(this.stack.pop());
    }
    return cards;
  }

  reset() {
    this.stack = [];
  }
}

module.exports = {Deck, Stack};
