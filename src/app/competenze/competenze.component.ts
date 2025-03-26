import { Component } from '@angular/core';
import { TecnicheComponent } from '../tecniche/tecniche.component';
import { TrasversaliComponent } from '../trasversali/trasversali.component';

@Component({
  selector: 'app-competenze',
  standalone: true,
  imports: [TecnicheComponent, TrasversaliComponent],
  templateUrl: './competenze.component.html',
  styleUrl: './competenze.component.css'
})
export class CompetenzeComponent {

}
