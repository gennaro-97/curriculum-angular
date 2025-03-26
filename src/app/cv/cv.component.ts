import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; //Importa il servizio Router
import { FooterComponent } from '../footer/footer.component';
import { ProfiloComponent } from '../profilo/profilo.component';
import { IstruzioneComponent } from '../istruzione/istruzione.component';
import { CompetenzeComponent } from '../competenze/competenze.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [RouterModule, FooterComponent, ProfiloComponent, IstruzioneComponent, CompetenzeComponent, CommonModule], //Aggiunge il servizio Router al componente
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
  
  order: string[] = ['profilo', 'istruzione', 'competenze'];

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  changeOrder() {
    this.order = this.shuffleArray(this.order);
  }

  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
