import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestListComponent } from './components/quest-list/quest-list.component';
import { ZipComponent } from './components/zip/zip.component';
import {AddQuestComponent} from "./components/add-quest/add-quest.component";
import {HomeComponent} from "./components/home/home.component";


const routes: Routes = [
 	{ path: '',component:HomeComponent},
  	{ path: 'quests', component: QuestListComponent },
	{ path: 'add', component: AddQuestComponent },
  	{ path: 'zip', component: ZipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
