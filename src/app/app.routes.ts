import { Routes } from '@angular/router';
import { LandpageComponent } from './landpage/landpage.component';
import { DiscoverComponent } from './discover/discover.component';
import { JoinComponent } from './join/join.component';


export const routes: Routes = [
    {
        path:"",
        component:LandpageComponent
    },
    {
        path:"discover",
        component: DiscoverComponent,
    },
    {
        path:"join",
        component: JoinComponent
    },
    {
        path: "landpage",
        component: LandpageComponent
    }
];
