import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseUpdate } from 'src/app/model/live.model';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {

  id: any;
  request!: ResponseUpdate;

  constructor(private clientService: apiService,
    private route: ActivatedRoute,
    private _route: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.clientService.getUser(this.id).subscribe(res => {
        this.request = {
          id: `${res.id}`,
          name: `${res.name}`,  
          email: `${res.email}`,
          telephone: `${res.telephone}`,
        }
    });
    }

  delete(){
    this.clientService.deleteUser(this.id).subscribe(res => {
      alert('Removido com Sucesso!!');
      this.refresh();
    }) 
    this.redirectTo('/')
  }

  redirectTo(uri:string){
    this._route.navigateByUrl('/')
   }

   refresh(): void {
    window.location.reload();
}
}
