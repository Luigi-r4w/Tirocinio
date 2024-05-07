export class Response {

  private code: string = '';
  private messaggio: string = '';
  
    
  getCode(): string {
    return this.code;
  }
    
  setCode(value: string) {
    this.code = value;
  }
    
  getMessaggio(): string {
    return this.messaggio;
  }
    
  setMessaggio(value: string) {
    this.messaggio = value;
  }

}
