import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from 'src/app/model/live.model';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  id: any;
  request!: RequestUpdate;

  constructor(
    private clientService: apiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.clientService.getUser(this.id).subscribe(res =>{
      this.request = {
        id: res.id,
        name: res.name,
        email: res.email,
        telephone: res.telephone
      }
      return this.request
    })
  }

  update(){
    this.clientService.updateUser(this.id, this.request).subscribe(res =>{})
    }
}
