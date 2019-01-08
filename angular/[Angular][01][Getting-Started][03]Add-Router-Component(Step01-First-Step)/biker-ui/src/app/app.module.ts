import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BikerListComponent } from './bikers/bikers-list.component';
import { BikersService } from './bikers/bikers.service';

import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { starComponent } from './shared/star.component';
import { BikersDetailComponent } from './bikers-detail/bikers-detail.component';
import { BikersHomeComponent } from './bikers-home/bikers-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BikerListComponent,
    ConvertToSpacePipe,
    starComponent,
    BikersDetailComponent,
    BikersHomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: BikersHomeComponent},
      {path: 'bikers', component: BikerListComponent},
      {path: 'bikers/:id', component: BikersDetailComponent},
      {path: '', redirectTo: 'welcome', pathMatch:'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [BikersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
