import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "src/app/services/contact.service";

@Component({
  templateUrl: './form.component.html',
  selector: 'app-form',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
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
      alert("verifique se os dados foram preenchidos corretamente");
      return
    };

    this.contactService.sendresponse(this.form.value)
    .then(() => {
      alert("Mesagem enviada")
      this.clearForm()
    }).catch((err) => {
      alert("Ocorreu um erro ao enviar a mensagem")
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