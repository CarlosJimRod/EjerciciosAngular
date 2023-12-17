import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FooterComponent} from './componentes/footer/footer.component';
import {HeaderComponent} from './componentes/header/header.component';
import {RecuadroComponent} from './componentes/recuadro/recuadro.component';
import {TablaComponent} from './componentes/tabla/tabla.component';
import {NgOptimizedImage} from "@angular/common";
import {BotonComponent} from './componentes/boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RecuadroComponent,
    TablaComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
