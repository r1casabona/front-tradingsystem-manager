import { TradingAutorizado } from './trading-autorizado';

export class RespostaTradingResponse {
    constructor(private _autorizado: string,
                private _tradingAutorizado: TradingAutorizado){}

    get autorizado(): string {
        return this._autorizado;
    }

    get tradingAutorizado(): TradingAutorizado {
        return this._tradingAutorizado;
    }
}