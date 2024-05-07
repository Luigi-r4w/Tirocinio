export class HotelDto {
    
  private nome: string = '';
  private address: string = '';
  private city: string = '';
  private link: string = '';
    
  getNome(): string {
    return this.nome;
  }
    
  setNome(value: string) {
    this.nome = value;
  }
    
  getAddress(): string {
    return this.address;
  }
    
  setAddress(value: string) {
    this.address = value;
  }
    
  getCity(): string {
    return this.city;
  }
    
  setCity(value: string) {
    this.city = value;
  }

  getLink(): string {
    return this.link;
  }
    
  setLink(value: string) {
    this.link = value;
  }
  
  constructor(nome: string = '', address: string = '', city: string = '', link: string = '') {
    this.nome = nome;
    this.address = address;
    this.city = city;
    this.link = link;
  }
}
