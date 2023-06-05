import { UnknowPipe } from './unknow.pipe';

describe('UnknowPipe', () => {
  it('create an instance', () => {
    const pipe = new UnknowPipe();
    expect(pipe).toBeTruthy();
  });

  it('Deve retornar um ponto de interrogação se o valor passado for unknown', () => {
    const pipe = new UnknowPipe();

    let result = pipe.transform('Unknown');
    expect(result).toEqual('?');

    result = pipe.transform('unknown');
    expect(result).toEqual('?');
  });

  it('Deve retornar o próprio valor se este for diferente de unknow', () => {
    const pipe = new UnknowPipe();

    let result = pipe.transform('Testes');
    expect(result).toEqual('Testes');
  });
});
