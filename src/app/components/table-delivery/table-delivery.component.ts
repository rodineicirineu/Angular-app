import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { apiService } from 'src/app/services/api.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table-delivery',
  templateUrl: './table-delivery.component.html',
  styleUrls: ['./table-delivery.component.css']
})
export class TableDeliveryComponent implements OnInit {

  delivery!: Array<any>;
  
 
  constructor(
    public clientService : apiService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.listarDelivery();
  }

  listarDelivery(){
    this.clientService.listarDelivery().subscribe(dados => this.delivery = dados)
  }
}
