import { catchError, map, tap } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


/******************************** OWN MODULES *************************************** */
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interfaces';
import { RegisterForm } from '../interfaces/register-form.interfaces';

const base_Url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient,
               private router : Router ) { }


  validateToken() : Observable<boolean> {
    const token = localStorage.getItem('token') || ''
    return this.http.get( `${ base_Url }/login/renew`, {
      headers : {
        'x-token': token
      }
    }).pipe(
      tap( ( resp :any ) => {
        localStorage.setItem('token', resp.token )
      }),
      map( resp => true ),
      catchError( error => of( false ))
    )

  }

  create( formData : RegisterForm | any ) {   
   
    return  this.http.post( `${ base_Url }/usuarios`, formData)
                .pipe(
                  tap( ( resp : any )  => {
                    localStorage.setItem('token', resp.token )
                    this.router.navigateByUrl('/')
                  })
                )
  }

  login( formData : LoginForm | any ){
    return this.http.post( `${ base_Url }/login`, formData )
                .pipe(
                  tap( ( resp : any )  => {
                    localStorage.setItem('token', resp.token )
                  })
                )
  }

  logOut(){
    localStorage.removeItem( 'token' )    
  }


}
