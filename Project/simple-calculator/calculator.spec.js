describe('calculator.js', function() {
  const calculator = new Calculator();
  it('Should add numbers to total', function(){
    calculator.total = 0;
    calculator.add(5);
    expect(calculator.total).toBe(5);
  });

  it('Should subtract numbers to total', function(){
    calculator.total = 20;
    calculator.subtract(5);
    expect(calculator.total).toBe(15);
  });

  it('Should multiply total by number', function(){
    calculator.total = 100;
    calculator.multiply(2);
    expect(calculator.total).toBe(200);
  });

  it('Should divide total by number', function(){
    calculator.total = 100;
    calculator.divide(2);
    expect(calculator.total).toBe(50);
  });
});
