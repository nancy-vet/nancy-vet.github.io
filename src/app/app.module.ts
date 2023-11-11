import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoPreloading, PreloadAllModules, RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { PrimaryMenu } from './@features/@menu/primary-menu/primary-menu.component';

const routes: Routes = [
  {
    path        : '',
    redirectTo  : 'splash',
    pathMatch   : 'full'
  },
  {
    path          : 'splash',
    loadChildren  : () => import('./@features/@splash/splash.module').then(m => m.SplashModule)
  },
  {
    path          : 'calculator',
    loadChildren  : () => import('./@features/section-calculator/@navigation/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path          : 'library',
    loadChildren  : () => import('./@features/section-library/@navigation/tabs.module').then(m => m.TabsPageModule)
  }
];

@NgModule({
  declarations              : [
    AppComponent
  ],
  imports                   : [
    CommonModule            ,
    BrowserModule           ,
    PrimaryMenu             ,
    IonicModule.forRoot()   ,
    RouterModule.forRoot(routes, {
      preloadingStrategy: NoPreloading
    }),

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers   : [{
      provide : RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap   : [
    AppComponent
  ],
})
export class AppModule {}
