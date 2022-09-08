import { DatasResponseDTO } from "../datas/datasResponseDTO.model";

export class PacienteResponseDTO {
    constructor(
        public pacienteId?: number,
        public dataNascimento?: Date,
        public datas?: DatasResponseDTO,
    ){
        this.pacienteId = pacienteId;
        this.dataNascimento = dataNascimento;
        this.datas = datas;
    }
}