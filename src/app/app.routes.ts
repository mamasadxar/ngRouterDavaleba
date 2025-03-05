import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { TemplatePageComponent } from './template-page/template-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    { path: '', component: ParentComponent },
    { path: 'parent-component', component: ParentComponent },
    { path: 'template', component: TemplatePageComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }