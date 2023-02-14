import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibriService } from 'src/app/services/libri.service';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-dettaglio-libro',
  templateUrl: './dettaglio-libro.component.html',
  styleUrls: ['./dettaglio-libro.component.css']
})
export class DettaglioLibroComponent {
modificaPreferito() {
throw new Error('Method not implemented.');
}
libro?: Libro;
  constructor(private route:ActivatedRoute, private service:LibriService) {
    let id = +this.route.snapshot.params['id'];
    this.libro=service.getByID(id);
    
  }
}
