import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { apiService } from './services/api.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import { HeaderComponent } from './components/header/header.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TableClientComponent } from './components/table-client/table-client.component';
import { TableDeliveryComponent } from './components/table-delivery/table-delivery.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ClientDeleteComponent } from './components/client-delete/client-delete.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    TableClientComponent,
    TableDeliveryComponent,
    DialogComponent,
    ClientDeleteComponent,
    ClientUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatBottomSheetModule
  ],
  providers: [apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
