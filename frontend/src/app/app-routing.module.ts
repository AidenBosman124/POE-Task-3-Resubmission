import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { LoginComponent } from './auth/login/login/login.component';
import { BulletinCreateComponent } from './bulletin/bulletin-create/bulletin-create.component';
import { BulletinDisplayComponent } from './bulletin/bulletin-display/bulletin-display.component';

const routes: Routes = [
  {path:'', component:BulletinDisplayComponent},
  {path:'add', component:BulletinCreateComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
