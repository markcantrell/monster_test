import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Form } from './components/form/form';
import { Outcome } from './components/outcome/outcome';
import { Container } from './components/container/container';
import { authorizationGuard } from './authorization-guard';




export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component:Login},
    {path: '', component:Container, canActivate:[authorizationGuard], children: [
        {path: 'form', component: Form, },
        {path: 'outcome', component: Outcome, },
    ]}
    
     

    
];
