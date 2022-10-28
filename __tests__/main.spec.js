const {verificaNasc} = require('../script.js');


describe("FUNCAO VERIFICA NASCIMENTO", () => {
  test('CHECA SE USUARIO TEM 12 ANOS OU MAIS', () => {
    expect(verificaNasc("10/08/1999")).toBe(true);
  });
});