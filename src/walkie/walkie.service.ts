import { Injectable } from '@nestjs/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { HaveEventData } from 'src/models/messageEventData.interface';

@Injectable()
export class WalkieService {
  // private mapUserInLobby = new BehaviorSubject<Array<String>>([])
  private mapUserInLobby = new Map<string, BehaviorSubject<HaveEventData>>();

  // private mapUserInLobbyAnswer = new Map<string, BehaviorSubject<Answer>>()

  getHolaWakie(): string {
    return 'Hola Walkie!';
  }

  getUsersInLobby(myUserId): string[] {
    // retornar todos los usuarios que estan en el lobby menos el mio
    const users = Array.from(this.mapUserInLobby.keys());
    return users.filter((user) => user !== myUserId);
  }

  enterToLobby(userId: string): Observable<HaveEventData> {
    // cuando un usuario entra al lobby, se crea un observable para que los demas usuarios puedan enviarle ofertas
    console.log('Usuario Entro', userId);
    if (this.mapUserInLobby.has(userId)) {
      return this.mapUserInLobby.get(userId);
    }
    const observable = new BehaviorSubject<HaveEventData>(null);
    this.mapUserInLobby.set(userId, observable);
    return observable;
  }

  sendOffer(data: HaveEventData): {
    message: string;
    data: string;
  } {
    const { clientDestiny } = data;
    console.log('Usuario ' + clientDestiny + ' recibio una oferta', data);
    const observable = this.mapUserInLobby.get(clientDestiny);
    // console.log('data 43 walie service', data)
    // console.log('observable', observable)
    if (!observable) {
      return null;
    }
    observable.next(data);
    observable.next(null);
    return { message: 'Oferta enviada', data: 'Oferta enviada' };
  }

  sendAnswer(data: HaveEventData) {
    const { clientOrigin } = data;

    console.log('Usuario ' + clientOrigin + ' recibio una respuesta', data);
    const observable = this.mapUserInLobby.get(clientOrigin);
    // console.log('data 43 walie service', data)
    // console.log('observable', observable)
    if (!observable) {
      return null;
    }
    observable.next(data);
    observable.next(null);
    return { message: 'Respuesta enviada', data: 'Respuesta enviada' };
  }

  sendCandidate(data: HaveEventData) {
    const { clientOrigin } = data;

    console.log('Usuario ' + clientOrigin + ' recibio una respuesta', data);
    const observable = this.mapUserInLobby.get(clientOrigin);
    // console.log('data 43 walie service', data)
    // console.log('observable', observable)
    if (!observable) {
      return null;
    }
    observable.next(data);
    observable.next(null);
    return { message: 'Respuesta enviada', data: 'Respuesta enviada' };
  }
}

// export interface SalaObservable {
//   observable: BehaviorSubject<MessageEventData>
//   user: string[]
// }
