import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlimentosService } from 'src/app/services/alimentos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

  Listado!:FormGroup
  constructor(public service:AlimentosService, public builder:FormBuilder ,public dialogo: MatDialog, public DialogRef:MatDialogRef<ModalComponent>){}


  ngOnInit(): void {
  this.Listado=this.builder.group(
    {
      Codigo:['',[Validators.required]],
      Descripcion:['',[Validators.required]],
      Precio:['',[Validators.required]]
    }
  )
  }

  cancelar():void{
    this.DialogRef.close()
  }
 
  confirmar():void{  
  this.service.addAlimentos(this.Listado.value)
  console.log(this.Listado.value)
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Registrado',
    showConfirmButton: false,
    timer: 1500
  })
  this.DialogRef.close()
  }


  

 
}
