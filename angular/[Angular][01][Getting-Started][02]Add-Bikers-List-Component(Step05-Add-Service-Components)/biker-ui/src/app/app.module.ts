import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BikerListComponent } from './bikers/bikers-list.component';
import { BikersService } from './bikers/bikers.service';

import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { starComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    BikerListComponent,
    ConvertToSpacePipe,
    starComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BikersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
