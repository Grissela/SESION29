import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    HomeComponent,
    ModalComponent,
    
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    HomeComponent,
    ModalComponent
  ],
})
export class PagesModule { }
