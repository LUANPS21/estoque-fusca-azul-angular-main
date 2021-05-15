import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateComponent } from './components/templates/update/update.component';
import { EstoqueComponent } from './components/templates/estoque/estoque.component';
import { EstoqueService } from './components/templates/estoque/estoque.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    EstoqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EstoqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
