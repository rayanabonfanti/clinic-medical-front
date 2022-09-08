export function endpoints(host: string){
    return {
        login: `${host}` + '/api/login/',
        datas: `${host}` + '/api/datas/',
        paciente: `${host}` + '/api/paciente/',
        medico: `${host}` + '/api/medico/',
    }
}
