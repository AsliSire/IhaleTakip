
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { environment } from '../environments/environment';
import { ModulerSuDeposu } from './ModulerSuDeposu';

@Injectable()

export class WebService {
   hour: string;


   constructor(private http: HttpClient, private router: Router, private _location: Location) {
   }

   getIlceListesi() {
      return this.http.get(environment.api_url + '/api/krommetal/ilce', { responseType: 'json' });
   }

   getSehirListesi() {
      return this.http.get(environment.api_url + '/api/krommetal/sehir', { responseType: 'json' });
   }

   getMusteriListesi() {
      return this.http.get(environment.api_url + '/api/krommetal/musteri', { responseType: 'json' });
   }

   getMlzBirimFiyat(mlz_kodu) {
      return this.http.get(environment.api_url + '/api/krommetal/mlzbirimfiyat?mlz_kodu=' + mlz_kodu, { responseType: 'json' });
   }

   getDovizKuruAl(kur_adi) {

      return this.http.get(environment.api_url + '/api/krommetal/dovizkuru?kur_adi=' + kur_adi, { responseType: 'json' });
   }

   public formatDate(date) {
      const d = new Date(date);
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      const year = d.getFullYear();
  
      let hour = d.getHours();
      let minutes = d.getMinutes();
      this.hour = hour + ':' + minutes;
      console.log(hour + ':' + minutes);
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      return [year, month, day].join('-');
    }

   HesapKaydet(model: ModulerSuDeposu) {
      var header = new HttpHeaders();
      header.append('Content-Type', 'application/json');

      return this.http.post(environment.api_url + '/api/krommetal/hesapkaydet', model, { headers: header })
   }

   KayitDuzenle(model: ModulerSuDeposu){
      var header = new HttpHeaders();
      header.append('Content-Type', 'application/json');

      return this.http.post(environment.api_url + '/api/krommetal/hesapkaydet', model, { headers: header })
   }

   getDepoFiyatlamaListesi() {
      return this.http.get(environment.api_url + '/api/krommetal/depofiyatlamalistesi', { responseType: 'json' });
   }

   getDepoFiyatlamaListesiKaydi(ref_no) {
      return this.http.get(environment.api_url + '/api/krommetal/depofiyatlamalistesikaydi?ref_no=' + ref_no, { responseType: 'json' });
   }

   GetFilter(start,end) {
      return this.http.get(environment.api_url + '/api/krommetal/getFilter?start=' + start +'&end=' + end, { responseType: 'json' })
    }

}