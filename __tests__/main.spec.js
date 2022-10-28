const {verificaNasc} = require("../script.js");

describe("Funcao verifica Idade do Usuario -- Input Correto", () => {
  test('CHECA SE USUARIO TEM 12 ANOS OU MAIS  => 10/08/1999 => true', () => {
    expect(verificaNasc("10/08/1999")).toBe(true);
  });
});

describe("Funcao verifica Idade do Usuario -- Input Incorreto", () => {
  test('CHECA SE USUARIO TEM 12 ANOS OU MAIS => 10/08/2012 => false', () => {
    expect(verificaNasc("10/08/2012")).toBe(false);
  });
});