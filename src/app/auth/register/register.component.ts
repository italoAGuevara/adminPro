import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

/*********************************** US SERVICES ******************************/
import { RegisterForm } from 'src/app/interfaces/register-form.interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false
  public form! : RegisterForm
  public registerForm  = this.formBuilder.group({
    nombre : [ 'italo', [ Validators.required, Validators.minLength( 3 ) ] ],
    email : [ 'italo4@mail.com', [ Validators.required, Validators.minLength( 3 ) ] ],
    password : [ '12345', [ Validators.required, Validators.minLength( 3 ) ] ],
    password2 : [ '12345', [ Validators.required, Validators.minLength( 3 ) ] ],
    terminos : [ true, [ Validators.required, Validators.minLength( 3 ) ] ]
  })

  constructor( private formBuilder : FormBuilder,
               private userService : UsuarioService ) { }

  createUser(){
    this.formSubmitted = true    

    if( this.registerForm.invalid ){
      return 
    }else{
      
    }

    //CREATE USER
    this.userService.create( this.registerForm.value )
      .subscribe({ 
        next: (resp) => console.log( resp ),

        error: (err) =>  {
          Swal.fire('ERROR', err.error.msg, 'error')
        }
      })
  }

  campoNoValido( campo : string) : boolean {

    if( this.registerForm.get( campo )!.invalid && this.formSubmitted ){
      return true
    } else {
      return false
    }
  }


   validatePasswords( password : string, password2 : string ) : boolean {

    const pass1Control = this.registerForm.get( password )
    const pass2Control = this.registerForm.get( password2 )

    if( ( pass1Control?.value !== pass2Control?.value )
       && this.formSubmitted 
    ){  
      pass2Control?.setErrors( { noIsIqual : true } )        
      return true
      
    } else {     
       return false
    }
  }


  acceptTerms( check : string ) : boolean {
      return  !this.registerForm.get( check )?.value  && this.formSubmitted 
  }


}
