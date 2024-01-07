import { NgModule, isDevMode } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NoPreloading, RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent           } from './app.component';

import { PrimaryMenu            } from './@features/@menu/primary-menu/primary-menu.component';
import { AppNavigationRouteEnum } from 'nv@models/route.enum';

const routes: Routes = [
  {
    path        : '',
    redirectTo  : AppNavigationRouteEnum.SPLASH,
    pathMatch   : 'full'
  },
  {
    path          : AppNavigationRouteEnum.SPLASH,
    loadChildren  : () => import('./@features/@splash/splash.module').then(m => m.SplashModule)
  },
  {
    path          : AppNavigationRouteEnum.CALCULATOR,
    loadChildren  : () => import('./@features/section-calculator/@navigation/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path          : AppNavigationRouteEnum.LIBRARY,
    loadChildren  : () => import('./@features/section-library/@navigation/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path          : AppNavigationRouteEnum.INFO,
    loadChildren  : () => import('./@features/section-info/@navigation/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path          : AppNavigationRouteEnum.EXAMINATION,
    loadChildren  : () => import('./@features/section-probes/@navigation/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path          : AppNavigationRouteEnum.VACCINATION,
    loadChildren  : () => import('./@features/section-vaccination/@navigation/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path          : AppNavigationRouteEnum.TRIVIA,
    loadChildren  : () => import('./@features/section-trivia/@navigation/tabs.module').then(m => m.TabsPageModule)
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

    IonicModule,

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
