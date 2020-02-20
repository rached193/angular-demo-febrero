import { CalculadoraComponent } from './calculadora.component';

describe('Calculadora Component', () => {

  let component: CalculadoraComponent;

  beforeEach(() => {
    component = new CalculadoraComponent();
  });

  it('should be exist', () => {
    expect(component).toBeDefined();
  });

  describe('with methods', () => {

    describe('sumar', () => {

      const DATA_2 = 2;
      const DATA_4 = 4;

      it('should be exist', () => {
        expect(component.sumar).toBeDefined();
      });

      it('case base', () => {
        expect(component.sumar(DATA_2, DATA_2)).toBe(DATA_4);
      });
      it('case limite', () => {
        expect(component.sumar(DATA_4, -DATA_2)).toBe(DATA_2);
      });
    });

    describe('division', () => {

      const DATA_2 = 2;
      const DATA_4 = 4;
      
      it('should be exist', () => {
        expect(component.division).toBeDefined();
      });

      it('case base', () => {
        expect(component.sumar(DATA_2, DATA_2)).toBe(DATA_4);
      });

    });

    it('restar', () => {
      expect(component.restar).toBeDefined();
    });
    it('multiplicacion', () => {
      expect(component.multiplicacion).toBeDefined();
    });


  });

});
