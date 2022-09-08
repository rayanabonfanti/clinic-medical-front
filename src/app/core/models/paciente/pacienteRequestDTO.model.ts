import { DatasRequestDTO } from "../datas/datasRequestDTO.model";

export class PacienteRequestDTO {
    constructor(
        public dataNascimento?: Date,
        public datas?: DatasRequestDTO,
    ){
        this.dataNascimento = dataNascimento;
        this.datas = datas;
    }
}