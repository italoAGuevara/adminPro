import { compileClassMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';

/******************************** OWN SERVICES *************************************** */
import { UsuarioService } from '../services/usuario.service';



/**
 * If the user has not a TOKEN, then redirecto to '/login'
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private usuarioService : UsuarioService,
               private router : Router ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {      

      return this.usuarioService.validateToken()
        .pipe(
          tap( isAuth => {
              if( !isAuth ) this.router.navigateByUrl('/login')       
            }
          )
        )
  }
  
}
