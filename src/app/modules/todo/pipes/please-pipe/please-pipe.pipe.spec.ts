import { PleasePipePipe } from './please-pipe.pipe';

describe('PleasePipePipe', () => {
  it('create an instance', () => {
    const pipe = new PleasePipePipe();
    expect(pipe).toBeTruthy();
  });
});

fdescribe('[transform]', () => {
  const pipe = new PleasePipePipe();

  it('should return `Please, test`', () => {
    expect(pipe.transform('test')).toBe('Please, test');
  });
});
