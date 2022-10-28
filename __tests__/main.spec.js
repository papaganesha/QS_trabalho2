const {verificaEmail, verificaNasc, verificaCpf, verificaSenha, verificaSenhas} = require("../script.js");

//VERFICA EMAIL
describe("Funcao verifica Email do Usuario -- Input Correto", () => {
  test('CHECA SE EMAIL É VALIDO  => joaopedro@gmail.com => true', () => {
    expect(verificaEmail("joaopedro@gmail.com")).toBe(true);
  });
});

describe("Funcao verifica Email do Usuario -- Input Incorreto", () => {
  test('CHECA SE EMAIL É INVALIDO  => joaopedro@gmail => false', () => {
    expect(verificaNasc("joaopedro@gmail")).toBe(false);
  });
});


//VERFICA CPF
describe("Funcao verifica CPF do Usuario -- Input Correto", () => {
  test('CHECA SE CPF É VALIDO  => 12345567889 => true', () => {
    expect(verificaCpf("03777418099")).toBe(true);
  });
});

describe("Funcao verifica CPF do Usuario -- Input Incorreto", () => {
  test('CHECA SE CPF É INVALIDO  => 1234556788 => false', () => {
    expect(verificaCpf("1234556788")).toBe(false);
  });
});


//VERFICA DATA NASCIMENTO
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

//VERFICA SENHA
describe("Funcao verifica se senha esta dentro do limite estipulado -- Input Correto", () => {
  test('CHECA SE SENHA ESTA DENTRO DO LIMITE MIN E MAX DE CARACTERES => 12345678 => true', () => {
    expect(verificaSenha("12345678")).toBe(true);
  });
});

describe("Funcao verifica se senha esta dentro do limite estipulado -- Input Incorreto", () => {
  test('CHECA SE SENHA ESTA DENTRO DO LIMITE MIN E MAX DE CARACTERES => 1234567 => true', () => {
    expect(verificaSenha("1234567")).toBe(false);
  });
});

describe("Funcao verifica se senha esta dentro do limite estipulado -- Input Correto", () => {
  test('CHECA SE SENHA ESTA DENTRO DO LIMITE MIN E MAX DE CARACTERES => 1234567345678910112304912301239412041230123914203 => true', () => {
    expect(verificaSenha("1234567345678910112304912301239412041230123914203")).toBe(true);
  });
});

describe("Funcao verifica se senha esta dentro do limite estipulado -- Input Incorreto", () => {
  test('CHECA SE SENHA ESTA DENTRO DO LIMITE MIN E MAX DE CARACTERES => 123456734567891011230491230123941204123012391420310 => false', () => {
    expect(verificaSenha("123456734567891011230491230123941204123012391420310")).toBe(false);
  });
});


//VERFICA SENHAS
describe("Funcao verifica se senhas combinam -- Input Correto", () => {
  test('CHECA SE SENHA E CONFIRMA SENHA SÃO IGUAIS => 12345678, 12345678 => true', () => {
    expect(verificaSenhas("12345678", "12345678")).toBe(true);
  });
});

describe("Funcao verifica se senhas combinam -- Input Incorreto", () => {
  test('CHECA SE SENHA E CONFIRMA SENHA SÃO IGUAIS => 12345678, 1234567  => false', () => {
    expect(verificaSenhas("12345678", "1234567")).toBe(false);
  });
});

