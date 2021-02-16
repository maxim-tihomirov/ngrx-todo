import { ComplitedPipe } from './complited.pipe';

fdescribe('ComplitedPipe', () => {
  let pipe: ComplitedPipe;

  beforeEach(() => {
    pipe = new ComplitedPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return `I`m completed, test `', () => {
    expect(pipe.transform('test')).toBe("I'm completed: - test");
  });
});
