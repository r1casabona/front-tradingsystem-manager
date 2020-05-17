import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { stringify } from 'querystring';
import { MatStepper } from '@angular/material/stepper';

import { AddTradingSystemService } from './add-trading-system.service';
import { TradingSystem  } from '../model/trading-system';
import { RespostaTradingResponse } from './payload/resposta-trading-response';
import { TradingAutorizado } from './payload/trading-autorizado';

@Component({
  selector: 'app-add-trading-system',
  templateUrl: './add-trading-system.component.html',
  styleUrls: ['./add-trading-system.component.sass']
})
export class AddTradingSystemComponent implements OnInit {
  // Form
  formTradingSystem: FormGroup;
  formManagementTrading: FormGroup;

  // checkbox
  isLinear = true;

  formTradingSystemButton = "disabled";

  // Slide toggle
  color: ThemePalette = 'accent';

  mensagem: string;
  imagem: string = 'norris.jpeg';
  numeroDeContratos: number;

  constructor(private _formBuilder: FormBuilder, private _addTradingSystemService: AddTradingSystemService) {}

  ngOnInit() {
    this.formTradingSystem = this._formBuilder.group({
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      question4: ['', Validators.required],
      question5: ['', Validators.required],
      question6: ['', Validators.required],
      question7: ['', Validators.required],
      question8: ['', Validators.required],
      question9: ['', Validators.required],
      question10: ['', Validators.required]
    });
    this.formManagementTrading = this._formBuilder.group({
      entrada: ['', Validators.required],
      saida: ['', Validators.required],
      stop: ['', Validators.required],
      ativo: ['', Validators.required],
      movimento: ['', Validators.required]
    });
  }
  
  onSubmit(tradingData, stepper: MatStepper) {
    
    const tradingSystem = new TradingSystem(parseFloat(tradingData.entrada), 
                                            parseFloat(tradingData.saida), 
                                            parseFloat(tradingData.stop), 
                                            tradingData.ativo, tradingData.movimento);

    //regra para definir se vai abrir com sucesso ou nao
    this._addTradingSystemService.tradingValid(tradingSystem)
            .subscribe(retorno => this.validaRetorno(retorno, stepper));

    
  }

  validaRetorno(validacao: RespostaTradingResponse, stepper: MatStepper): void {
    (validacao.autorizado == "SIM") ? this.authorizedTrading(validacao.tradingAutorizado, stepper): this.unauthorizedTrading(validacao.tradingAutorizado, stepper);
  }

  /**
   * Tradin autorizado
   */
  authorizedTrading(tradingAutorizado: TradingAutorizado, stepper: MatStepper) {
    this.mensagem = 'Seu trading está autorizado!';
    this.imagem = 'norris.jpeg';
    this.numeroDeContratos = tradingAutorizado.numeroDeContratos;
    stepper.next();
  }

  /**
   * Trading não autorizado
   */
  unauthorizedTrading(tradingAutorizado: TradingAutorizado, stepper: MatStepper) {
    this.mensagem = 'Seu trading não foi autorizado!';
    this.imagem = 'norris_nok.jpg';
    this.numeroDeContratos = tradingAutorizado.numeroDeContratos;
    stepper.next();
  }

}