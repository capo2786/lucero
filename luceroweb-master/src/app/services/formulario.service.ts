import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
  })
 export class FormularioService {
  textPattern= new RegExp(/^[a-zA-Z ]+$/);
  numberPattern= new RegExp(/^[0-9 ]+$/);

    constructor() { }

    form: FormGroup = new FormGroup({
      
        nombre: new FormControl('', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]),
        apellido: new FormControl('', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]),
        sector: new FormControl('', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]),
        calleUno: new FormControl('', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]),
        calleDos: new FormControl('',[Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]),
        servicio: new FormControl(0,[Validators.required]),
        numero_contacto1: new FormControl('', [Validators.required, Validators.minLength(10),Validators.pattern(this.numberPattern)]),
        numero_contacto: new FormControl('', [Validators.required, Validators.minLength(10),Validators.pattern(this.numberPattern)]),
        fecha: new FormControl('',[Validators.required]),
        hora: new FormControl('',[Validators.required]),
      });
      initializeFormGroup() {
        this.form.setValue({
        
          nombre: '',
          apellido: '',
          sector: '',
          calleUno: '',
          calleDos:'',
          servicio: 0,
          fecha: '',
          hora: '',
          numero_contacto1:'',
          numero_contacto:'',
       
        });
      }



 } 