import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NetworkModule } from "../network/network.module";
import { FormComponent } from "./form.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NetworkModule,
    MatSnackBarModule,
  ],
  declarations: [FormComponent],
  exports: [FormComponent]
})
export class FormModule {}