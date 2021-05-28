import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { apiService } from 'src/app/services/api.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.css']
})
export class TableClientComponent implements OnInit {

  id!: any;
  client!: Array<any>;

  constructor(
    public clientService : apiService,
    public dialog: MatDialog,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarClient();
    this.id = this.route.snapshot.paramMap.get('id'); 
  }

  listarClient(){
    this.clientService.listarClient().subscribe(dados => this.client = dados)
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  reloadCurrentPage() {
    window.location.reload();
   }

  delete(){
    this.clientService.deleteUser(this.id).subscribe(res => {
      alert('Removido com Sucesso!!');
    })
  }

      
}

