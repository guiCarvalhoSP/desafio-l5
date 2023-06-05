import { StatusTranslatePipe } from './status-translate.pipe';

describe('StatusTranslatePipe', () => {
  it('create an instance', () => {
    const pipe = new StatusTranslatePipe();
    expect(pipe).toBeTruthy();
  });

  it('Deve traduzir status alive para português', () => {
    const pipe = new StatusTranslatePipe();

    let result = pipe.transform('Alive');

    expect(result).toEqual('Vivo');
  });

  it('Deve traduzir status dead para português', () => {
    const pipe = new StatusTranslatePipe();

    let result = pipe.transform('Dead');

    expect(result).toEqual('Morto');
  });

  it('Deve retornar ponto de interrogação se não for passado nem dead, nem alive como parametros', () => {
    const pipe = new StatusTranslatePipe();

    let result = pipe.transform('Unknown');

    expect(result).toEqual('?');
  });
});
