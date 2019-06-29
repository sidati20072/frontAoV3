import { Pipe, PipeTransform } from '@angular/core';
import {Offre} from '../Models/Offre.model';


@Pipe({
    name: 'SearchOffrePipe'
})
export class SearchOffrePipe implements PipeTransform {

    transform(
        offres: Offre[],
        objet?: string,
        type?: string,
        city?: string,
    ): Offre[] {

        if (!offres) return [];
        if (!objet) return offres;
        objet = objet.toLocaleLowerCase();
        offres = [...offres.filter(offre => offre.objet.toLocaleLowerCase().includes(objet))];

        if (!type) return offres;
        type = type.toLocaleLowerCase();
        offres = [...offres.filter(offre => offre.type.toLocaleLowerCase().includes(  type))];

        if (!city) return offres;
        city = city.toLocaleLowerCase();
        offres = [...offres.filter(offre => offre.city.toLocaleLowerCase().includes(  city))];


        return offres;
    }
}
