import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { TemplatePageComponent } from './template-page/template-page.component';

export const routes: Routes = [

    { path: 'parent-component', component: ParentComponent },
    { path: 'template/:id', component: TemplatePageComponent },

];
