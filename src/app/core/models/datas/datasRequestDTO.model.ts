export class DatasRequestDTO {
    constructor(
        public name?: string,
        public telefone?: string,
        public email?: string,
        public endereco?: string,
    ){
        this.name = name;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
    }
}