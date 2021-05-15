export class Estoque {
    cod: number
    desc: string
    qtddisponivel: number
    max: number
    min: number
    
    constructor(cod: number, desc: string, qtddisponivel: number, max: number, min: number){
        this.cod = cod
        this.desc = desc
        this.qtddisponivel = qtddisponivel
        this.max = max
        this.min = min
}