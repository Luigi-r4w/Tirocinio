export class HotelDto {
    private _nome: string = '';
    private _address: string = '';
    private _city: string = '';
    private _link: string = '';
    
    get nome(): string {
        return this._nome;
      }
    
      set nome(value: string) {
        this._nome = value;
      }
    
      get address(): string {
        return this._address;
      }
    
      set address(value: string) {
        this._address = value;
      }
    
      get city(): string {
        return this._city;
      }
    
      set city(value: string) {
        this._city = value;
      }
    
      get link(): string {
        return this._link;
      }
    
      set link(value: string) {
        this._link = value;
      }

}
