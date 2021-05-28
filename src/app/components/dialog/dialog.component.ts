import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RequestCreate } from 'src/app/model/live.model';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  request: RequestCreate = {
    id: '',
    name: '',
    email: '',
    telephone: ''
  }

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public clientService: apiService
    ) {}

  ngOnInit(): void {
  }


  save(){
    this.clientService.createUser(this.request).subscribe(res =>{})
    this.dialogRef.close()
    this.load(); 
  }

  cancel(): void {
    this.dialogRef.close();
  }

  load() {
    location.reload()
  }
}
