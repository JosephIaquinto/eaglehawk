import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapspaceModule } from './mapspace/mapspace.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, MapspaceModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
