export class DatasResponseDTO {
    constructor(
        public datasId?: number,
        public name?: string,
        public telefone?: string,
        public email?: string,
        public endereco?: string,
    ){
        this.datasId = datasId;
        this.name = name;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
    }
}