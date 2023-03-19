import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NetworkModule } from "../network/network.module";
import { FormComponent } from "./form.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NetworkModule,
  ],
  declarations: [FormComponent],
  exports: [FormComponent]
})
export class FormModule {}