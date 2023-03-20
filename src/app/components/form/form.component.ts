import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "src/app/services/contact.service";
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  templateUrl: './form.component.html',
  selector: 'app-form',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private snackbar: MatSnackBar
  ) { }

  public form!: FormGroup


  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      phone: [""],
      email: ["", [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      company: [""],
      message: ["", [Validators.required, Validators.maxLength(1000)]]
    })
  }

  sendFormResponse() {
    if (!this.form.valid) {
      this.snackbar.open("Formulário inválido", "x", {duration: 3000, panelClass: 'snackbar-warn'})
      return
    };

    this.contactService.sendresponse(this.form.value)
    .then(() => {
      this.snackbar.open("Mensagem enviada", "x", {duration: 2000, panelClass: 'snackbar-success'})
      this.clearForm()
    }).catch((err) => {
      this.snackbar.open("Ocoreu um erro :(", "x", {duration: 3000, panelClass: 'snackbar-error'})
    })
  }

  clearForm() {
    this.form.get('name')?.setValue("");
    this.form.get('phone')?.setValue("");
    this.form.get('email')?.setValue("");
    this.form.get('company')?.setValue("");
    this.form.get('message')?.setValue("");
  }

}