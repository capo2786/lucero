import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../services/formulario.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  items= [];
  eventSource = [];
  viewTitle: string;
  calendar = {
    mode: 'month',
    locale: 'en-US',
    currentDate: new Date(),
  };
  selectedDate = new Date();



  constructor(private service: FormularioService, public db: AngularFirestore) { }
  

ngOnInit() {
    this.db.collection(`servicios`)
    .snapshotChanges().subscribe(serverItems => {
      this.items = [];
      serverItems.forEach(a => {
        let item:any = a.payload.doc.data();
        item.id = a.payload.doc.id;
        this.items.push(item);
      });
    });
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  saveData() {
    this.db.collection('/contactos').add(this.service.form.value)
   alert('Reservasiòn exitosa')
   this.onClear();
     console.log('reservado');
  }
  
}
