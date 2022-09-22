import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  protected static instancias = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity); // o que herda
    this._maxLifePoints = 80;
    Dwarf.instancias += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instancias;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
export default Dwarf;