import hashGenerator from './index';

describe('index.js', () => {
  it('should say something', () => {
    expect(hashGenerator('🐰')).toEqual('👉 🐰 👈');
    expect(hashGenerator()).toEqual('No args passed!');
  });
});
