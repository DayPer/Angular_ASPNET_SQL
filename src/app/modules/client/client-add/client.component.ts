import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Clients } from 'src/app/core/entities/data';
import { ClientService } from 'src/app/core/services/client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientsForm!: FormGroup;
  public id!: string;
  public name!: string;
  public email!: string;
  constructor(public dialogRef: MatDialogRef<ClientComponent>,
              private formBuilder: FormBuilder,
              private clientService: ClientService)
              {
                this.clientsForm = this.formBuilder.group({
                  id: ['', Validators.required],
                  name: ['', Validators.required],
                  email: ['', Validators.required],
                });
              }


  ngOnInit(): void {
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  addClient(){
    const clientActivities: Clients = new Clients();
    clientActivities.idClient = this.formCreated['id'].value;
    clientActivities.nameClient = this.formCreated['name'].value;
    clientActivities.mailClient = this.formCreated['email'].value;
    console.log(clientActivities);

    this.clientService.postClient(clientActivities).subscribe(result => {

    });
  }
  get formCreated() {
    return this.clientsForm.controls;
  }
}
