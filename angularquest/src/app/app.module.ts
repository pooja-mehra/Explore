import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule} from'@angular/material/toolbar';
import {MatSidenavModule} from'@angular/material/sidenav';
import {MatListModule} from'@angular/material/list';
import {MatIconModule} from'@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestComponent } from './components/add-quest/add-quest.component';
import { QuestListComponent } from './components/quest-list/quest-list.component';
import { QuestService } from './services/quest.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ZipComponent } from './components/zip/zip.component';
import {ZipService} from'src/app/services/zip.service';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestComponent,
    QuestListComponent,
    HeaderComponent,
    FooterComponent,
    ZipComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
	MatToolbarModule,
	FlexLayoutModule,
	MatSidenavModule,
	MatListModule,
	MatIconModule,
	DragDropModule,
	MatFormFieldModule,
	MatCardModule,
	MatInputModule,
	MatSelectModule,
	MatButtonModule
  ],
  providers: [QuestService,ZipService,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
