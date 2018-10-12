import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Globals } from '.././globals';
declare function myInput() : any;
declare var $,swal: any;

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

	RegisterEntity;
	same;
	submitted;
	submitted1;
	submitted2;
  	btn_disable;

  constructor(private router: Router,private globals: Globals, private RegisterService: RegisterService) { }

  ngOnInit() {
		this.RegisterEntity = {};
	    myInput();
	}

	next1(RegisterForm1){
		this.submitted1 = true;
		if(RegisterForm1.valid){   
			this.submitted1 = false;   
			$(".register_tab li").removeClass("active");
			$(".register_tab li#educationli").addClass("active");
			$("#personaldetail").removeClass("active in");
			$("#educationdetail").addClass("active in");
		}
	}

	previous1(){
			$(".register_tab li").removeClass("active");
			$(".register_tab li#personalli").addClass("active");
			$("#educationdetail").removeClass("active in");
			$("#personaldetail").addClass("active in");
	}

	next2(RegisterForm2){
		this.submitted2 = true;
		if(RegisterForm2.valid){   
			this.submitted2 = false; 
			$(".register_tab li").removeClass("active");
			$(".register_tab li#loginli").addClass("active");
			$("#educationdetail").removeClass("active in");
			$("#logindetail").addClass("active in");
		}
	}

	previous2(){
		$(".register_tab li").removeClass("active");
		$(".register_tab li#educationli").addClass("active");
		$("#logindetail").removeClass("active in");
		$("#educationdetail").addClass("active in");
	}

	admin_Register(AdminRegisterForm){
		this.submitted = true;
		if(AdminRegisterForm.valid){   
			this.submitted = false; 
			this.btn_disable = true;
			this.globals.isLoading = true;
			this.RegisterService.admin_Register(this.RegisterEntity)
			.then((data) => 
			{	
				this.globals.isLoading = false;
				this.btn_disable = false;
				this.submitted = false;
				if(data=='email dublicate'){
					swal({
            type: 'warning',
            title: 'Oops...',
            text: 'This email is already exists.',
            })
				} else {							
					this.RegisterEntity = {};
					AdminRegisterForm.form.markAsPristine();
					swal({
            type: 'success',
            title: 'Congratulations...!!!',
						text: 'Your registration is successfully. Now you can login.',
						showConfirmButton: false,
        		timer: 1500
            })   
					this.router.navigate(['/login']);	
				}			
			}, 
			(error) => 
			{ 
				this.btn_disable = false;
				this.submitted = false;
				this.globals.isLoading = false;
				this.router.navigate(['/pagenotfound']);
			});
		}
	}

	checkpassword(){ 
		if(this.RegisterEntity.cPassword != this.RegisterEntity.Password){
			this.same = true;
		} else {
			this.same = false;
		}
		
	}

}
