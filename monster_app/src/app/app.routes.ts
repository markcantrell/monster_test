import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Form } from './components/form/form';
import { Outcome } from './components/outcome/outcome';




export const routes: Routes = [
    {path: '', component: Login, pathMatch: 'full' },
    {path: 'form', component: Form},
    {path: 'outcome', component: Outcome}
];
