export class HotelDto {
    
  private nome: string = '';
  private id: string = '';
  private city: string = '';
  private main_photo_url: string = '';
  private city_research: string = ''; 
    
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

  getMain_photo_url(): string {
    return this.main_photo_url;
  }
    
  setMain_photo_url(value: string) {
    this.main_photo_url = value;
  }

  getCity_research(): string {
    return this.city_research;
  }
    
  setCity_research(value: string) {
    this.city_research = value;
  }
  
  constructor(nome: string = '', id: string = '', city: string = '', main_photo_url: string = '', city_research: string='') {
    this.nome = nome;
    this.id = id;
    this.city = city;
    this.main_photo_url = main_photo_url
    this.city_research = city_research
  }
}
