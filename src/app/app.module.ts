import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/app/environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
