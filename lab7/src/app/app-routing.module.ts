import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
// import { CommonModule } from '@angular/common';

// 1. import components
import { HomepageComponent } from "./homepage/homepage.component";
import { AboutpageComponent } from "./aboutpage/aboutpage.component";
import { ContactpageComponent } from "./contactpage/contactpage.component";
import {DetailsComponent} from "./details/details.component";

// 2. set up array of route objects
const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'about', component: AboutpageComponent },
    { path: 'contact', component: ContactpageComponent },
    { path: 'details/:id', component: DetailsComponent }
];

@NgModule({

    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
//  declarations: []
})
export class AppRoutingModule { }
