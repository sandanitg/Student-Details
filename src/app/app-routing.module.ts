import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StuComponent } from './stu/stu.component';
import { LoginComponent } from './login/login.component';
import { componentFactoryName } from '@angular/compiler';
import { AddComponent } from './add/add.component';
import { ContactComponent } from './contact/contact.component';
import { ThemeComponent } from './theme/theme.component';


const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path:"stu",
    component: StuComponent,
    children:[{
      path:"add",
      component:AddComponent
    },
    {
      path:"contact",
      component:ContactComponent
    },
    {
      path:"theme",
      component:ThemeComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
