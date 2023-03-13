import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  empForm: FormGroup;

  constructor(private _fb:FormBuilder,
    private _stService: StudentService, private _dialoRef: DialogRef<StudentComponent>
    ){
    this.empForm=this._fb.group({
      firstname:'',
      lastname:'',
      email:'',
      dob:'',
      gen:'',
      year:'',
      department:'',
    })
    }
    savefn(){
      if(this.empForm.valid){
        // console.log(this.empForm.value)
        this._stService.addStudent(this.empForm.value).subscribe({
          next:(val:any)=> {
            alert('add student successfully')
            this._dialoRef.close();

          },
          error:(err:any)=>{
            console.error(err)
          }
        })
      }
    }
  }




