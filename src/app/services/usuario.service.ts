import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { AngularFirestore, DocumentReference, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosCollection: AngularFirestoreCollection<User>;
  private usuarios: Observable<User[]>;

  constructor(private db:AngularFirestore) { this.usuariosCollection = db.collection<User>('users');
  this.usuarios = this.usuariosCollection.snapshotChanges().pipe(map(
    actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const idUsuario = a.payload.doc.id;
        return {idUsuario, ... data};
      });
    }
  ));
}

getUsuario() {
  return this.usuarios;
}
}