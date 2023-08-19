import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientService } from 'src/app/core/services/client.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  clientsForm!: FormGroup;
  public id!: string;
  public name!: string;
  public email!: string;
  constructor(public dialogRef: MatDialogRef<EditComponent>,
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
  updateClient(){

  }
}
