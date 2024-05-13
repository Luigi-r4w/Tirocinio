export class HotelDto {
    
  private nome: string = '';
  private id: string = '';
  private city: string = '';
    
  getNome(): string {
    return this.nome;
  }
    
  setNome(value: string) {
    this.nome = value;
  }
    
  getId(): string {
    return this.id;
  }
    
  setId(value: string) {
    this.id = value;
  }
    
  getCity(): string {
    return this.city;
  }
    
  setCity(value: string) {
    this.city = value;
  }
  
  constructor(nome: string = '', id: string = '', city: string = '') {
    this.nome = nome;
    this.id = id;
    this.city = city;
  }
}
