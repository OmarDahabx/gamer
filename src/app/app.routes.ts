import { Home } from './components/home/home';
import { Routes } from '@angular/router';


export const routes: Routes = [
    {path:'', redirectTo: 'home' , pathMatch:'full'},
    {path:'home', component : Home , title:'Home Page' },
    {path:'about', loadComponent: () =>
    import('./components/about/about').then((m) => m.About) , title:'About Page'},
    {path:'gamingSetup',loadComponent:()=> import('./components/gamingSetup/gamingSetup').then((m)=>m.GamingSetup) , title:'Gaming Setups Page'},
    {path:'games', loadComponent:()=> import('./components/gamess/gamess').then((m)=>m.Gamess) , title:'Games Page'},
    {path:'contact' , loadComponent: ()=> import('./components/contact/contact').then((m)=>m.Contact) , title:'Contact Page'},
    {path:'**' , loadComponent:()=> import('./components/not-found/not-found').then((m)=>m.NotFound) , title:'Not Found'} 
];
