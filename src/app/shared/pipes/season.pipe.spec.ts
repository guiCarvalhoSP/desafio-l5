import { SeasonPipe } from './season.pipe';

describe('SeasonPipe', () => {
  it('create an instance', () => {
    const pipe = new SeasonPipe();
    expect(pipe).toBeTruthy();
  });

  
  it('Deve substituir o S de Season por T de Temporada', () => {
    const pipe = new SeasonPipe();

    let result = pipe.transform('S01E01');

    expect(result).toEqual('T01E01');
  });

});
