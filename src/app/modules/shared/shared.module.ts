import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { COMPONENTS } from './components';
import { MaterialModule } from '../material/material.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ExampleComponent } from './pages/example/example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    COMPONENTS,
    NotFoundComponent,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  declarations: [HeaderComponent, NotFoundComponent, ExampleComponent]
})
export class SharedModule { }
