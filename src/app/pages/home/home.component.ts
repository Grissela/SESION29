import { Component,OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Alimentos } from 'src/app/interface/alimentos';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { ModalComponent } from '../modal/modal.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  alimentos!:Alimentos[];
  
  constructor(private service:AlimentosService, public dialogo: MatDialog, public router:Router){}

  ngOnInit(): void {
  this.service.getAlimentos().subscribe(res=>{
  this.alimentos = res
  for(let item of this.alimentos){
    console.log(item.Codigo)
  }
  console.log(res)


})}

borrar(alimento:Alimentos){
  Swal.fire({
    title: 'Desea eliminar producto',
    icon: 'error',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Si, Eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Exitoso!',
        'Has Eliminado producto exitosamente',
        'success'
      )
      this.service.deleteAlimentos(alimento)
      this.router.navigate([''])
    }
  })
  
  
}

  openDialog():void{
    const DialogRef=this.dialogo.open(ModalComponent)
  }

}
