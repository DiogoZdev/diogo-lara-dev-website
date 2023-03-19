import { Injectable } from "@angular/core";

export interface IformResponse {
  name: string,
  message: string,
  phone?: string,
  email: string,
  company?: string,
}

@Injectable({
  providedIn: 'root' 
})
export class ContactService {

  private formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScHjWEOQ03imn_HX5CDBlLPKeHDAODSrCeJUCb6j1wL7DqISQ/formResponse';
 
  sendresponse(data: IformResponse) {
    const { name, email, phone, company, message} = data;
    const formData = new FormData()

    formData.append('entry.343471405', name)
    formData.append('entry.1403166629', email)
    formData.append('entry.1017124644', phone || 'null')
    formData.append('entry.2063537884', company || 'PF')
    formData.append('entry.2005204500', message)

    return fetch(this.formUrl, {
      method: "POST",
      body: formData
    })
    .then((res) => res)
    .catch((err) => err)
  }
}