import { Injectable } from '@angular/core';
import { addDoc, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { collection, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alimentos } from '../interface/alimentos';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {


  constructor(private firestore:Firestore, public router:Router) { }

  getAlimentos():Observable<Alimentos[]>{
    const AlimentosRef = collection(this.firestore, 'alimentos');
    console.log(AlimentosRef )
    return collectionData(AlimentosRef , {idField:'id'}) as Observable<Alimentos[]>

  }

  addAlimentos(alimento:Alimentos[]){
    const refAlimentos=collection(this.firestore, 'alimentos')
    return addDoc(refAlimentos, alimento)
  }

  deleteAlimentos(alimento:Alimentos){
    const refAlimentos = doc(this.firestore, 'alimentos/'+alimento.id)
    return deleteDoc(refAlimentos)
  }
}
