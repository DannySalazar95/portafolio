import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    ExperienceComponent,
    KnowledgeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
