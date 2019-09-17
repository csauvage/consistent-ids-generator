import IdGenerator from './index';

describe('Index.js', () => {
  it('Should generate a hash', () => {
    const generator = new IdGenerator('Random_Secret');
    const randomHash = generator.generate('cus');
    expect(randomHash.length).toEqual(24 + 4);
  });
});
