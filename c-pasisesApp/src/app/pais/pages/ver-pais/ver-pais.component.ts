import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/interfaces.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.paisService.buscarCodigo(param.id)),
        tap((resp) => console.log(resp))
      )
      .subscribe((pais) => {
        console.log(pais);
        this.pais = pais;
      });
  }
}
//   this.activatedRoute.params.subscribe(({ id }) => {
//     console.log({ id });
//     this.paisService.buscarCodigo(id).subscribe((pais) => {
//       console.log({ pais });
//       // pais = pais;
//     });
//   });
// }
