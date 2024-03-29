import { Injectable } from '@angular/core';
import { InvocaService } from '../../base/services/invoca.service';

@Injectable({
  providedIn: 'root'
})
export class MostrarAlumnoService {

  constructor(
    private invoke: InvocaService,
  ) { }

  async alumnoSelecc() {
    return await this.invoke.httpInvoke('alumnoSelecc');
  }

}
