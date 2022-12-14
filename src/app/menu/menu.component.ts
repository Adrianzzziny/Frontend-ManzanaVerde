import { Component, OnInit } from '@angular/core';
import { Opcion } from '../security/opcion';
import { TokenService } from '../security/token.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;
  opcRegistro : Opcion[] = [];
  opcConsulta : Opcion[] = [];
  opcCRUD : Opcion[] = [];
  

  constructor(private tokenService: TokenService) {
    console.log("MenuComponent >>> constructor >>> " + this.tokenService.getToken());
  }

  ngOnInit() {
    console.log("MenuComponent >>> ngOnInit >>> ");

    this.opcRegistro = this.tokenService.getOpciones().filter( x => x.tipo === 1);
    this.opcConsulta = this.tokenService.getOpciones().filter( x => x.tipo === 2);
    this.opcCRUD = this.tokenService.getOpciones().filter( x => x.tipo === 3);

    console.log("MenuComponent >>> ngOnInit >>> " + this.tokenService.getToken());
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}