import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

/*********************************** US SERVICES ******************************/
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  public formSubmitted = false

  public email : string = localStorage.getItem( 'email' ) || ''



  public loginForm = this.formBuilder.group({
    email : [ this.email, [ Validators.required,Validators.minLength( 5 )]  ],
    password : [ '', [ Validators.required, Validators.minLength( 5 ) ] ],
    remember :[  this.autochechRemember( this.email ) ]
  })

  constructor( private router : Router,
               private formBuilder : FormBuilder,
               private usuarioService : UsuarioService ) { }

  ngOnInit(): void {
  }


  login() {
    this.usuarioService.login( this.loginForm.value )
      .subscribe({ 
        next: () => {
          
          if( this.loginForm.get('remember')?.value ){
            localStorage.setItem('email',  this.loginForm.get('email')?.value ||  '' )
          }else{
            localStorage.removeItem( 'email' )
          }

          this.router.navigateByUrl('/')           
        },

        error: (err) =>  {
          Swal.fire('ERROR', err.error.msg, 'error')
        }        
      })
    
  }


  autochechRemember( flat : string ) : boolean {
    if( flat ) return true

    return false
  }
}
