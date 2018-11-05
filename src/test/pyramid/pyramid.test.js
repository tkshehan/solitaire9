import Pyramid from '../../pyramid/pyramid';

describe('Pyramid', function() {
  it('Should build a game of pyramid', function() {
    const pyramid = new Pyramid();
    expect(pyramid.pyramid).toHaveLength(6);
    for (const card of pyramid.pyramid[5]) {
      expect(card.active).toBe(true);
    }
    expect(pyramid.reserve).toHaveLength(6);
    expect(pyramid.topCard.active).toBe(true);
    expect(pyramid.pile.stack).toHaveLength(0);
    expect(pyramid.discard.stack).toHaveLength(0);
  });

  it('Draw cards from the deck, and put the last topcard in the pile',
      function() {
        const pyramid = new Pyramid();
        const card = pyramid.topCard;
        expect(card.active).toBe(true);

        pyramid.draw();
        expect(pyramid.pile.stack[0]).toBe(card);
        expect(pyramid.pile.stack).toHaveLength(1);
        expect(card.active).toBe(false);
        expect(pyramid.topCard.active).toBe(true);
      });

  describe('match()', function() {
    const tenOfHearts = {value: 10, suit: 'Hearts', active: true};
    const threeOfClubs = {value: 3, suit: 'Clubs', active: true};
    const kingOfSpades = {value: 13, suit: 'Spades', active: true};

    it('Should match active cards that add up to 13', function() {
      const pyramid = new Pyramid();

      pyramid.reserve[0] = tenOfHearts;
      pyramid.pyramid[5][0] = threeOfClubs;
      expect(pyramid.isMatch(tenOfHearts, threeOfClubs)).toBe(true);

      pyramid.match(tenOfHearts, threeOfClubs);

      expect(pyramid.reserve[0]).toBe(false);
      expect(pyramid.pyramid[5][0]).toBe(false);
      expect(pyramid.discard.stack).toHaveLength(2);

      pyramid.topCard = kingOfSpades;
      pyramid.match(kingOfSpades);
      expect(pyramid.discard.stack[2]).toEqual(Object.assign({}, kingOfSpades, {
        active: false,
      }));
      expect(pyramid.topCard).not.toBe(kingOfSpades);
      expect(pyramid.topCard).not.toBe(false);
      expect(pyramid.topCard.active).toBe(true);
    });

    it('Should not match cards that dont add to exactly 13', function() {
      const pyramid = new Pyramid();
      pyramid.reserve[0] = kingOfSpades;
      pyramid.reserve[1] = threeOfClubs;
      expect(pyramid.isMatch(threeOfClubs, kingOfSpades)).toBe(false);

      pyramid.match(kingOfSpades, threeOfClubs);
      expect(pyramid.reserve[0]).toBe(kingOfSpades);
      expect(pyramid.reserve[1]).toBe(threeOfClubs);
      expect(pyramid.discard.stack).toHaveLength(0);
    });

    it('Should not match cards that are not active', function() {
      const pyramid = new Pyramid();
      const threeOfHearts = {value: 3, suit: 'Hearts', active: false};
      const tenOfSpades = {value: 10, suit: 'Speads', active: false};
      pyramid.pyramid[0][0] = threeOfHearts;
      pyramid.pyramid[0][1] = tenOfSpades;
      pyramid.pyramid[0][2] = tenOfHearts;

      expect(pyramid.isMatch(threeOfHearts, tenOfSpades)).toBe(false);
      expect(pyramid.isMatch(threeOfHearts, tenOfHearts)).toBe(false);

      pyramid.match(threeOfHearts, tenOfSpades);
      expect(pyramid.pyramid[0][0]).toBe(threeOfHearts);
    });
  });
});
