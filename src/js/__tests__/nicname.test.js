import {Validator} from '../nicname';

test('nicname', () => {
    const Nicname = "ff555-66h555h_kk3s";
    const userName2 = new Validator();
    const result = userName2.validateUsername(Nicname);
  
    expect(result).toEqual(true);
  });

  test('nicname', () => {
    const Nicname = "-ff555-66h555h_kk3s";
    const userName2 = new Validator();
    const result = userName2.validateUsername(Nicname);
  
    expect(result).toEqual(false);
  });

  test('nicname', () => {
    const Nicname = "ff555-66h55455h_kk3s";
    const userName2 = new Validator();
    const result = userName2.validateUsername(Nicname);
  
    expect(result).toEqual(false);
  });

  test('nicname', () => {
    const Nicname = "ff555-66h555h_kk3s76";
    const userName2 = new Validator();
    const result = userName2.validateUsername(Nicname);
  
    expect(result).toEqual(false);
  });