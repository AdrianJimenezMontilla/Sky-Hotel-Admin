import { Injectable } from '@angular/core';
import { Comentario } from '../model/comentario';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { AngularFirestore, DocumentReference, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private comentariosCollection: AngularFirestoreCollection<Comentario>;
  private comentarios: Observable<Comentario[]>;

  constructor(private db: AngularFirestore) {

    this.comentariosCollection = db.collection<Comentario>('comentarios');
    this.comentarios = this.comentariosCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const comentarioId = a.payload.doc.id;
          return {comentarioId, ...data};
        });
      }
    ));
   }
   

   getComentario() {
    return this.comentarios;
  }
  public getComentarios(): Observable<Comentario[]> {
    return this.db.collection('comentarios').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Comentario;
        const comentarioId = a.payload.doc.id;
        return { comentarioId, ...data };
      }))
    );
  }
  
}
