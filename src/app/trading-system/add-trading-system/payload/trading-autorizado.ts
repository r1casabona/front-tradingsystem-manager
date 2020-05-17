export class TradingAutorizado {
    constructor(private _numeroDeContratos: number,
                private _tipoDoContrato: string) {}

    get numeroDeContratos(): number {
        return this._numeroDeContratos;
    }

    get tipoDoContrato(): string {
        return this._tipoDoContrato;
    }
}