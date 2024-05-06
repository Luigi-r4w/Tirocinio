export class UserDto {

  private nome: string = '';
  private email: string = '';
  private password: string = '';
    
  getNome(): string {
    return this.nome;
  }
    
  setNome(value: string) {
    this.nome = value;
  }
    
  getEmail(): string {
    return this.email;
  }
    
  setEmail(value: string) {
    this.email = value;
  }
    
  getPassword(): string {
    return this.password;
  }
    
  setPassword(value: string) {
    this.password = value;
  }
}
