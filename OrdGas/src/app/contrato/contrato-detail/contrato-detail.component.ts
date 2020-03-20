import { Component, OnInit } from '@angular/core';
import { Contrato } from 'app/models/contrato';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratoService } from 'app/services/contrato.service';

@Component({
  selector: 'app-contrato-detail',
  templateUrl: './contrato-detail.component.html',
  styleUrls: ['./contrato-detail.component.scss']
})
export class ContratoDetailComponent implements OnInit {

  id: number;
contrato: Contrato;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private contratoService: ContratoService ){ }

  ngOnInit() {
    this.contrato = new Contrato();

    this.id = this.route.snapshot.params['id'];
    
    this.contratoService.getContrato(this.id)
      .subscribe(data => {
        console.log(data)
        this.contrato = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['list-contrato']);
  }

}
