import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Ng4FilesModule } from './ng4-files';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { KycInstaService } from './kyc.service';
import { DocumentCardComponent } from './doc-cards/doc-card.component';
import { ScannerDirective } from './doc-cards/scanner-directive';

@NgModule({
  declarations: [
    AppComponent,
    DocumentCardComponent,
    ScannerDirective
  ],
  imports: [
    BrowserModule,
    Ng4FilesModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [ KycInstaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
