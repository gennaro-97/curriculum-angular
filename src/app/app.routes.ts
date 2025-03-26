import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cv', component: CvComponent},
];
