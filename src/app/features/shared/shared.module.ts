import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedRoutingModule } from './shared-routing.module';
import { TableSearchComponent } from './components/table-search/table-search.component';


@NgModule({
  declarations: [TableSearchComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TableSearchComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
