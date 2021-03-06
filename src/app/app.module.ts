import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { PendientesPage } from '../pages/pendientes/pendientes.component';
import { TerminadosPage } from '../pages/terminados/terminados.component';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { ListasComponent} from '../components/listas.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Services (called providers in Ionic)
import { DeseosProvider } from '../providers/deseos.provider';
//Pipes
import { FiltroCompletadoPipe } from '../pipes/filtro-completado/filtro-completado';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    FiltroCompletadoPipe,
    ListasComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeseosProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
