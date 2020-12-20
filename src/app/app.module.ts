import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { OrderMgrComponent } from './order/order-mgr/order-mgr.component';
import { OrderViewComponent } from './order/order-view/order-view.component';
import { OrderViewDialog } from './order/order-view/order-view-dialog';
import { TransMgrComponent } from './transfer/trans-mgr/trans-mgr.component';
import { TransPrintDialog } from './transfer/trans-mgr/trans-print-dialog';
import { TransViewComponent } from './transfer/trans-view/trans-view.component';
import { PkgMgrComponent } from './package/pkg-mgr/pkg-mgr.component';
import { PkgViewComponent } from './package/pkg-view/pkg-view.component';
import { ReportComponent } from './report/report.component';
import { PkgCreationComponent } from './package/pkg-creation/pkg-creation.component';
import { TransFeedbackComponent } from './transfer/trans-feedback/trans-feedback.component';
import { TransCreationComponent } from './transfer/trans-creation/trans-creation.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderMgrComponent,
    MainMenuComponent,
    TransMgrComponent,
    PkgMgrComponent,
    ReportComponent,
    OrderViewComponent,
    OrderViewDialog,
    TransPrintDialog,
    TransViewComponent,
    PkgViewComponent,
    PkgCreationComponent,
    TransFeedbackComponent,
    TransCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
