import {Deck, Stack} from '../../pyramid/deck';

describe('Deck', () => {
  const deckLength = 52;
  const keys = ['value', 'suit', 'active'];
  const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
  const cardsInSuit = 13;

  it('Should initialize a new Deck', function() {
    const deck = new Deck();
    expect(deck.deck).toHaveLength(deckLength);
    expect(deck.deck[0]).toMatchObject({
      value: 1,
      suit: 'Hearts',
      active: false,
    });
    // 1 of each value of cardsInSuit for each suit
    for (const suit of suits) {
      const cards = deck.deck.filter((card) => card.suit === suit);
      expect(cards).toHaveLength(cardsInSuit);
      for (let i = 1; i <= cardsInSuit; i++) {
        expect(cards.filter((card) => card.value === i)).toHaveLength(1);
      }
    }
  });

  it('Should deal cards', function() {
    const deck = new Deck();
    let cards = [];
    cards = [...cards, deck.deal()];
    expect(cards).toHaveLength(1);
    expect(deck.deck).toHaveLength(deckLength - 1);

    cards = [...cards, ...deck.deal(5)];
    expect(cards).toHaveLength(6);
    expect(deck.deck).toHaveLength(deckLength - 6);
    for (const card of cards) {
      expect(Object.keys(card)).toMatchObject(keys);
    }
  });

  it('Should add cards back to the deck', () => {
    const deck = new Deck();
    const cards = deck.deal(40);
    deck.add(cards.slice(20));
    expect(deck.deck).toHaveLength(deckLength - 20);
  });

  it('Should load a deck made of cards passed into the constructor',
      function() {
        const cards = new Deck().deal(40);
        const deck = new Deck(cards);
        expect(deck.deck).toHaveLength(40);
        for (const card of cards) {
          expect(deck.deck).toContain(card);
        }
      }
  );
});

describe('Stack', function() {
  const testCards = [...Array(30)].map((item, index) => {
    return {
      value: index,
    };
  });

  it('Should initialize an empty stack', function() {
    const stack = new Stack();
    expect(stack.stack).toEqual([]);
  });

  it('Should load cards passed as a paramater', function() {
    const stack = new Stack(testCards);
    expect(stack.stack).toHaveLength(testCards.length);
    for (const card of stack.stack) {
      expect(testCards).toContain(card);
      expect(Object.keys(card)).toEqual(['value']);
    }
  });

  it('Should add(cards) to the stack', function() {
    const stack = new Stack();
    stack.add(testCards);
    expect(stack.stack).toHaveLength(testCards.length);
    for (const card of stack.stack) {
      expect(testCards).toContain(card);
      expect(Object.keys(card)).toEqual(['value']);
    }
    const testCard = {value: 31};
    stack.add(testCard);
    expect(stack.stack).toHaveLength(testCards.length + 1);
    expect(stack.stack).toContain(testCard);
  });

  it('Should reset() the stack', function() {
    const stack = new Stack(testCards);
    stack.reset();
    expect(stack.stack).toEqual([]);
  });

  it('Should deal() cards out', function() {
    const stack = new Stack(testCards);
    const cards = stack.deal();
    expect(cards).toHaveLength(1);
    expect(stack.stack).toHaveLength(testCards.length - 1);
  });
});
