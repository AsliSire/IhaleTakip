import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebService } from '../web.service';
import { Subject } from 'rxjs';
import { ModulerSuDeposu } from '../ModulerSuDeposu';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl } from '@angular/forms';
const now = Date.now();

@Component({
  selector: 'app-listeleme',
  templateUrl: './listeleme.component.html',
  styleUrls: ['./listeleme.component.css']
})
export class ListelemeComponent implements OnInit,OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<ListelemeComponent> = new Subject();
  depofiyatlamalistesi: Object;
  filtreleme: boolean;

  constructor(private client: WebService) { }

  fg_datefilter = new FormGroup({
    baslangic_tarihi: new FormControl(),
    bitis_tarihi: new FormControl()
  })
  ngOnInit() {
    this.fg_datefilter.patchValue({
      baslangic_tarihi: this.client.formatDate(now),
      bitis_tarihi: this.client.formatDate(now) 
    })
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.GetDepoFiyatlamaListesi();
  }

  GetDepoFiyatlamaListesi(){
    this.client.getDepoFiyatlamaListesi().subscribe(
      data => {
        console.table('GetRadyolojiIslem=', data);
        this.depofiyatlamalistesi = data;
        this.dtTrigger.next();
      });
  }

  KayitDuzenle(ref_no){
  localStorage.setItem("edit_ref_no",ref_no);
  let url1 = window.location.origin + '/' + 'fiyatlama';
  if (environment.base_url != '') url1 = window.location.origin + environment.base_url + 'fiyatlama';
  window.location.href = url1;

  }

  KayitSil(ref_no){
    const ModulerSuDeposuHesap = new ModulerSuDeposu();
    ModulerSuDeposuHesap.ref_no = ref_no;
    ModulerSuDeposuHesap.islem_durumu = 1;

    this.client.KayitDuzenle(ModulerSuDeposuHesap).subscribe(data => {
      if (data == 'ok') {
        this.dtTrigger.unsubscribe();
        this.GetDepoFiyatlamaListesi();
      }
    });
  }

  TarihleAra(baslangic_tarihi, bitis_tarihi) {
    this.filtreleme = true;
    this.dtTrigger.unsubscribe();
    this.client.GetFilter(baslangic_tarihi, bitis_tarihi).subscribe(
      data => {
        this.depofiyatlamalistesi = data;
        this.dtTrigger.next();
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
