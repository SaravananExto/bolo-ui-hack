import { TranslatePipe } from './translate.pipe';

describe('TranslatePipe', () => {
  it('should translate a key', async () => {
    const pipe = new TranslatePipe();
    const result = await pipe.transform('test.key');
    expect(result).toBe('Translated: test.key');
  });
});
