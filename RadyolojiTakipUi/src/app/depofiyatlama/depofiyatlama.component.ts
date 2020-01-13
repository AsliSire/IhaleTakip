
import { Component, OnInit, OnDestroy} from '@angular/core';
import { WebService } from '../web.service';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../_services/authentication.service';
import { ModulerSuDeposu } from '../ModulerSuDeposu';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-depofiyatlama',
  templateUrl: './depofiyatlama.component.html',
  styleUrls: ['./depofiyatlama.component.css']
})
export class DepofiyatlamaComponent implements OnInit,OnDestroy {

  isLogin: boolean = false;
  isExx: boolean = false;

  depokatsayisi_value: number

  dikmebirimfiyati: any;
  gergibirimfiyati: any;
  cdkbirimfiyati: any;
  tdkbirimfiyati: any;


  musteriler: any;
  sehirler: any;
  ilceler: any;
  mlzbirimfiyat: any;
  dovizkuru: any;

  depotipi: any;
  depoen: any;
  depoenalt: any;
  depoboy: any;
  depoboyalt: any;
  depokatsayisi: any;
  depohacim: any;

  tabankalinlik: any;
  tavankalinlik: any;
  kalinlik1: any;
  kalinlik15: any;
  kalinlik2: any;
  kalinlik25: any;
  kalinlik3: any;
  kalinlik4: any;

  giriscap: any;
  cikiscap: any;
  bosaltmacap: any;
  tasmacap: any;
  mansonekstracap: any;

  girisadet: any;
  cikisadet: any;
  bosaltmaadet: any;
  tasmaadet: any;
  ekstraadet: any;

  depofiyatitl: any;
  depofiyatiusd: any;
  nakliyebedeli: any;
  nakliyelidepofiyatitl: any;
  nakliyelidepofiyatiusd: any;

  sacbirimfiyati: any;
  civatabirimfiyati: any;
  mansonbirimfiyati: any;

  montajgideri: any;
  uretimgideri: any;
  usdkur: any;

  mansonsayisi: any;
  mansontipi: any;

  modulsayisi: any;
  yarimodulsayisi: any;
  tabansayisi: any;
  tavansayisi: any;
  cdksayisi: any;
  tdksayisi: any;
  gergisayisi: any;
  dikmesayisi: any;

  tdkagirlik: any;
  cdkagirlik: any;
  silikonsayisi: any;
  yapistiricisayisi: any;
  lastiksayisi: any;
  merdivensayisi: any;
  ustkapaksayisi: any;
  suseviyesayisi: any;

  silikonbirimfiyati: any;
  yapistiricibirimfiyati: any;
  lastikbirimfiyati: any;
  merdivenbirimfiyati: any;
  ustkapakbirimfiyati: any;
  suseviyebirimfiyati: any;
  isciliktutari: any;
  nakliyetutari: any;
  iskontoorani: any;
  iskontotutari: any;
  edit_ref_no: number;

  get controls(): FormGroup["controls"] {
    return this.tanimform.controls;
  }

  tanimform = new FormGroup({
      hdnori: new FormControl(''),
      sehir: new FormControl(''),

      depotipi: new FormControl(''),
      depoen: new FormControl(''),
      depoenalt: new FormControl(''),
      depoboy: new FormControl(''),
      depoboyalt: new FormControl(''),
      depokatsayisi: new FormControl(''),
      depohacim: new FormControl(''),

      tabankalinlik: new FormControl(''),
      tavankalinlik: new FormControl(''),
      kalinliktaban: new FormControl(''),
      kalinliktavan: new FormControl(''),
      kalinlik1: new FormControl(''),
      kalinlik15: new FormControl(''),
      kalinlik2: new FormControl(''),
      kalinlik25: new FormControl(''),
      kalinlik3: new FormControl(''),
      kalinlik35: new FormControl(''),
      kalinlik4: new FormControl(''),

      giriscap: new FormControl(''),
      cikiscap: new FormControl(''),
      bosaltmacap: new FormControl(''),
      tasmacap: new FormControl(''),
      mansonekstracap: new FormControl(''),

      girisadet: new FormControl(''),
      cikisadet: new FormControl(''),
      bosaltmaadet: new FormControl(''),
      tasmaadet: new FormControl(''),
      ekstraadet: new FormControl(''),

      depofiyatitl: new FormControl(0),
      depofiyatiusd: new FormControl(0),
      nakliyebedeli: new FormControl(0), // kemal
      nakliyelidepofiyatitl: new FormControl(0),
      nakliyelidepofiyatiusd: new FormControl(0),

      sacbirimfiyati: new FormControl(0),
      civatabirimfiyati: new FormControl(0),
      mansonbirimfiyati: new FormControl(0),

      montajgideri: new FormControl(''),
      uretimgideri: new FormControl(''),
      usdkur: new FormControl(''),

      mansonsayisi: new FormControl(''),
      mansontipi: new FormControl(''),

      modulsayisi: new FormControl(''),
      yarimodulsayisi: new FormControl(''),
      tabansayisi: new FormControl(''),
      tavansayisi: new FormControl(''),
      tabanagirlik: new FormControl(''),
      tavanagirlik: new FormControl(''),
      modulagirlik: new FormControl(''),
      yarimodulagirlik: new FormControl(''),

      cdksayisi: new FormControl(''),
      tdksayisi: new FormControl(''),
      gergisayisi: new FormControl(''),
      dikmesayisi: new FormControl(''),

      cdkagirlik: new FormControl(''),
      tdkagirlik: new FormControl(''),
      gergiagirlik: new FormControl(''),
      dikmeagirlik: new FormControl(''),

      silikonsayisi: new FormControl(''),
      yapistiricisayisi: new FormControl(''),
      civatasayisi: new FormControl(''),
      lastiksayisi: new FormControl(''),
      merdivensayisi: new FormControl(''),
      ustkapaksayisi: new FormControl(''),
      suseviyesayisi: new FormControl(''),

      tdkbirimfiyati: new FormControl(''),
      cdkbirimfiyati: new FormControl(''),
      gergibirimfiyati: new FormControl(''),
      dikmebirimfiyati: new FormControl(''),
      silikonbirimfiyati: new FormControl(''),
      yapistiricibirimfiyati: new FormControl(''),
      lastikbirimfiyati: new FormControl(''),
      merdivenbirimfiyati: new FormControl(''),
      ustkapakbirimfiyati: new FormControl(''),
      suseviyebirimfiyati: new FormControl(''),
      kalinliklartoplami: new FormControl(''),
      ortmodulkalinlik: new FormControl(''),

      modultutari: new FormControl(''),
      yarimodultutari: new FormControl(''),
      tabantutari: new FormControl(''),
      tavantutari: new FormControl(''),
      tdktutari: new FormControl(''),
      cdktutari: new FormControl(''),
      gergitutari: new FormControl(''),
      dikmetutari: new FormControl(''),
      silikontutari: new FormControl(''),
      yapistiricitutari: new FormControl(''),
      civatatutari: new FormControl(0),
      lastiktutari: new FormControl(''),
      mansontutari: new FormControl(''),
      isciliktutari: new FormControl(''),
      nakliyetutari: new FormControl(''),
      iskontoorani: new FormControl(''),
      iskontotutari: new FormControl(''),
      aciklama: new FormControl(''),
    });
  //--------------------------------------------------------------------------------------
  constructor(private client: WebService, private authenticationService: AuthenticationService) { }
  //---------------------------------------------------------------------------------------
  
  ngOnInit() {

    if (this.authenticationService.currentUserValue) {
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }

    var usr = this.authenticationService.currentUserValue;
    if (usr.usertype == 'Admin') {
      this.isExx = true;
    }

    //#region Düzenleme
    this.edit_ref_no = Number(localStorage.getItem("edit_ref_no"));
    if(this.edit_ref_no){
      this.client.getDepoFiyatlamaListesiKaydi(this.edit_ref_no).subscribe(
        data => {
          this.tanimform.patchValue({
      
            depotipi: data[0]['depo_tipi'],
            depoen: data[0]['depo_en'],
            depoboy: data[0]['depo_boy'],
            depokatsayisi: data[0]['depo_kat_sayisi'],
            depohacim: data[0]['depo_hacim'],
      
            tabankalinlik: data[0]['depo_taban_kalinlik'],
            tavankalinlik: data[0]['depo_tavan_kalinlik'],
            kalinlik1: data[0]['depo_1_kalinlik'],
            kalinlik15: data[0]['depo_15_kalinlik'],
            kalinlik2: data[0]['depo_2_kalinlik'],
            kalinlik25: data[0]['depo_25_kalinlik'],
            kalinlik3: data[0]['depo_3_kalinlik'],
            kalinlik35: data[0]['depo_35_kalinlik'],
            kalinlik4: data[0]['depo_4_kalinlik'],
      
            giriscap: data[0]['manson_giris_cap'],
            girisadet: data[0]['manson_giris_adet'],
            cikiscap: data[0]['manson_cikis_cap'],
            cikisadet: data[0]['manson_cikis_adet'],
            bosaltmacap: data[0]['manson_bosaltma_cap'],
            bosaltmaadet: data[0]['manson_bosaltma_adet'],
            tasmacap: data[0]['manson_tasma_cap'],
            tasmaadet: data[0]['manson_tasma_adet'],
            mansonekstracap: data[0]['manson_ekstra_cap'],      
            ekstraadet: data[0]['manson_ekstra_adet'],
      
            depofiyatitl: data[0]['depo_tutari'],
            usdkur: data[0]['doviz_kur'],
            depofiyatiusd: data[0]['dovizli_tutar'],

            sacbirimfiyati: data[0]['sac_birim_fiyat'],
            merdivenbirimfiyati: data[0]['merdiven_birim_fiyat'],
            mansonbirimfiyati: data[0]['manson_birim_fiyat'],
            ustkapakbirimfiyati: data[0]['ust_kapak_birim_fiyat'],
            suseviyebirimfiyati: data[0]['seviye_gosterge_birim_fiyat'],
            tdkbirimfiyati: data[0]['tdk_birim_fiyat'],
            cdkbirimfiyati: data[0]['cdk_birim_fiyat'],
            gergibirimfiyati: data[0]['gergi_birim_fiyat'],
            dikmebirimfiyati: data[0]['dikme_birim_fiyat'],
            civatabirimfiyati: data[0]['civata_birim_fiyat'],
            silikonbirimfiyati: data[0]['silikon_birim_fiyat'],
            yapistiricibirimfiyati: data[0]['yapistirici_birim_fiyat'],
            lastikbirimfiyati: data[0]['lastik_birim_fiyat'],

            modulsayisi: data[0]['modul_sayisi'],
            yarimodulsayisi: data[0]['yari_modul_sayisi'],
            tabansayisi: data[0]['taban_sayisi'],
            tavansayisi: data[0]['tavan_sayisi'],
            tdksayisi: data[0]['tdk_sayisi'],
            cdksayisi: data[0]['cdk_sayisi'],
            gergisayisi: data[0]['gergi_sayisi'],
            dikmesayisi: data[0]['dikme_sayisi'],
            civatasayisi: data[0]['civata_sayisi'],
            silikonsayisi: data[0]['silikon_sayisi'],
            yapistiricisayisi: data[0]['yapistirici_sayisi'],
            lastiksayisi: data[0]['lastik_sayisi'],

            modulagirlik: data[0]['modul_agirlik'],
            yarimodulagirlik: data[0]['yari_modul_agirlik'],
            tabanagirlik: data[0]['taban_agirlik'],
            tavanagirlik: data[0]['tavan_agirlik'],
            tdkagirlik: data[0]['tdk_agirlik'],
            cdkagirlik: data[0]['cdk_agirlik'],
            gergiagirlik: data[0]['gergi_agirlik'],
            dikmeagirlik: data[0]['dikme_agirlik'],

            modultutari: data[0]['modul_tutari'],
            yarimodultutari: data[0]['yari_modul_tutari'],
            tabantutari: data[0]['taban_tutari'],
            tavantutari: data[0]['tavan_tutari'],
            tdktutari: data[0]['tdk_tutari'],
            cdktutari: data[0]['cdk_tutari'],
            gergitutari: data[0]['gergi_tutari'],
            dikmetutari: data[0]['dikme_tutari'],
            civatatutari: data[0]['civata_tutari'],
            silikontutari: data[0]['silikon_tutari'],
            yapistiricitutari: data[0]['yapistirici_tutari'],
            lastiktutari: data[0]['lastik_tutari'],
            mansontutari: data[0]['manson_tutari'],
            nakliyetutari: data[0]['nakliye_tutari'],
            isciliktutari: data[0]['iscilik_tutari'],

            kalinliklartoplami: data[0]['kalinliklar_toplami'],
            ortmodulkalinlik: data[0]['ortalama_modul_kalinlik'],

            /* nakliyebedeli: data[0]['depo_taban_kalinlik'],
            nakliyelidepofiyatitl: data[0]['depo_taban_kalinlik'],
            nakliyelidepofiyatiusd: data[0]['depo_taban_kalinlik'],     
            montajgideri: data[0]['depo_taban_kalinlik'],
            uretimgideri: data[0]['depo_taban_kalinlik'],     
            mansonsayisi: data[0]['depo_taban_kalinlik'],
            mansontipi: data[0]['depo_taban_kalinlik'],      
            merdivensayisi: data[0]['depo_taban_kalinlik'],
            ustkapaksayisi: data[0]['depo_taban_kalinlik'],
            suseviyesayisi: data[0]['depo_taban_kalinlik'],
            iskontoorani: data[0]['depo_taban_kalinlik'],
            iskontotutari: data[0]['depo_taban_kalinlik'],
            sehir: data[0]['depo_taban_kalinlik'], */
          });

          if(data[0]['depo_kat_sayisi'] < 1.5) this.controls.kalinlik15.disable();
          if(data[0]['depo_kat_sayisi'] < 2) this.controls.kalinlik2.disable();
          if(data[0]['depo_kat_sayisi'] < 2.5) this.controls.kalinlik25.disable();
          if(data[0]['depo_kat_sayisi'] < 3) this.controls.kalinlik3.disable();
          if(data[0]['depo_kat_sayisi'] < 3.5) this.controls.kalinlik35.disable();
          if(data[0]['depo_kat_sayisi'] < 4) this.controls.kalinlik4.disable();

        });
    }
    //#endregion Düzenleme
    localStorage.removeItem("edit_ref_no");

    this.client.getMusteriListesi().subscribe(data => {
      this.musteriler = data;
    });

    this.client.getSehirListesi().subscribe(data => {
      this.sehirler = data;
    }
    );
    this.client.getIlceListesi().subscribe(data => {
      this.ilceler = data;
    });

    //#region MALZEME BİRİM FİYATLARI

    //  let mlz_kodu = 'SAC';
    //  this.client.getMlzBirimFiyat('SAC').subscribe
    //  (data => 
    //   {
    //     this.mlzbirimfiyat = data;
    //     var birimfiyat = data['alis_fiyat'];
    //     console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
    //     this.tanimform.patchValue(
    //     {
    //        sacbirimfiyati : birimfiyat
    //     }
    //     );
    //   }
    //  );

    let mlz_kodu = 'SİLİKON';
    this.client.getMlzBirimFiyat(mlz_kodu).subscribe
      (data => {
        this.mlzbirimfiyat = data;
        var birimfiyat = data['alis_fiyat'];
        //console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
        this.tanimform.patchValue(
          {
            silikonbirimfiyati: birimfiyat
          });
        this.silikonbirimfiyati = birimfiyat;
      });

    mlz_kodu = 'YAPIŞTIRICI';
    this.client.getMlzBirimFiyat(mlz_kodu).subscribe
      (data => {
        this.mlzbirimfiyat = data;
        var birimfiyat = data['alis_fiyat'];
        // console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
        this.tanimform.patchValue(
          {
            yapistiricibirimfiyati: birimfiyat,
          });
        this.yapistiricibirimfiyati = birimfiyat;
      });

    this.client.getMlzBirimFiyat('LASTİK').subscribe
      (data => {
        this.mlzbirimfiyat = data;
        var birimfiyat = data['alis_fiyat'];
        // console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
        this.tanimform.patchValue(
          {
            lastikbirimfiyati: birimfiyat,
          });
        this.lastikbirimfiyati = birimfiyat;
      });

    //  this.client.getMlzBirimFiyat('MERDİVEN').subscribe
    //  (data => 
    //   {
    //     this.mlzbirimfiyat = data;
    //     var birimfiyat = data['alis_fiyat'];
    //     console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
    //     this.tanimform.patchValue(
    //     {
    //        merdivenbirimfiyati : birimfiyat,
    //     }
    //     );
    //     this.merdivenbirimfiyati = birimfiyat;
    //   }
    //  );

    this.client.getMlzBirimFiyat('ÜST KAPAK').subscribe
      (data => {
        this.mlzbirimfiyat = data;
        var birimfiyat = data['alis_fiyat'];
        console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
        this.tanimform.patchValue(
          {
            ustkapakbirimfiyati: birimfiyat,
          });
        this.ustkapakbirimfiyati = birimfiyat;
      });

    this.client.getMlzBirimFiyat('SU SEVİYE GÖSTERGESİ').subscribe
      (data => {
        this.mlzbirimfiyat = data;
        var birimfiyat = data['alis_fiyat'];
        console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
        this.tanimform.patchValue(
          {
            suseviyebirimfiyati: birimfiyat,
          });
        this.suseviyebirimfiyati = birimfiyat;
      });

    this.client.getMlzBirimFiyat('MONTAJ GİDERİ').subscribe
      (data => {
        this.mlzbirimfiyat = data;
        var birimfiyat = data['alis_fiyat'];
        console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
        this.tanimform.patchValue(
          {
            montajgideri: birimfiyat
          });
        this.montajgideri = birimfiyat;
      });
      
    this.client.getMlzBirimFiyat('ÜRETİM GİDERİ').subscribe
      (data => {
        this.mlzbirimfiyat = data;
        var birimfiyat = data['alis_fiyat'];
        console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
        this.tanimform.patchValue(
          {
            uretimgideri: birimfiyat
          });
        this.uretimgideri = birimfiyat;
      });

    this.client.getMlzBirimFiyat('TEK DELİKLİ KÖŞEBENT').subscribe
      (data => {
        this.mlzbirimfiyat = data;
        var birimfiyat = data['alis_fiyat'];
        console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
        this.tanimform.patchValue(
          {
            tdkbirimfiyati: birimfiyat
          });
      });

    this.client.getMlzBirimFiyat('ÇİFT DELİKLİ KÖŞEBENT').subscribe
      (data => {
        this.mlzbirimfiyat = data;
        var birimfiyat = data['alis_fiyat'];
        console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
        this.tanimform.patchValue(
          {
            cdkbirimfiyati: birimfiyat
          });
      });

    this.client.getMlzBirimFiyat('GERGİ').subscribe
      (data => {
        this.mlzbirimfiyat = data;
        var birimfiyat = data['alis_fiyat'];
        console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
        this.tanimform.patchValue(
          {
            gergibirimfiyati: birimfiyat
          });
      });

    this.client.getMlzBirimFiyat('DİKME').subscribe
      (data => {
        this.mlzbirimfiyat = data;
        var birimfiyat = data['alis_fiyat'];
        console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
        this.tanimform.patchValue(
          {
            dikmebirimfiyati: birimfiyat
          });
      });

    //#endregion MALZEME BİRİM FİYATLARI

    this.client.getDovizKuruAl('USD').subscribe
      (data => {
        this.dovizkuru = data;
        this.usdkur = this.toStringDecimal(data['kur_tutari']);
        console.log('gelen fiyat =', data, ' kurtutari=', this.usdkur);
        this.tanimform.patchValue(
          {
            usdkur: this.usdkur
          });
      });
  }
  
  SecimDepo(mlzkod) {

    this.client.getMlzBirimFiyat(mlzkod).subscribe
      (data => {
        this.mlzbirimfiyat = data;
        var birimfiyat = data['alis_fiyat'];

        console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
        this.tanimform.patchValue(
          {
            sacbirimfiyati: birimfiyat,
          }
        );

        //if (mlzkod=='KROM 304') 
        {
          this.client.getMlzBirimFiyat(mlzkod + ' CİVATA').toPromise().then(data => {
            this.civatabirimfiyati = this.toStringDecimal(data['alis_fiyat']);
            this.tanimform.patchValue(
              {
                civatabirimfiyati: this.civatabirimfiyati
              }
            )
          }).catch(console.log)
        }
        {
          this.client.getMlzBirimFiyat(mlzkod + ' MANŞON').toPromise().then(data => {
            this.tanimform.patchValue(
              {
                mansonbirimfiyati: data['alis_fiyat'],
              }
            )
          }).catch(console.log)
        }
      },error => {
          this.mlzbirimfiyat = 0;
          this.tanimform.patchValue(
            {
              sacbirimfiyati: 0
            }
          );
        });

  }
  //------------------------------------------------------------------------
  SecimSehir(sehir) {

    console.log('secilensehir=', sehir);

    /* kemal */
    if (sehir == '') {
      this.mlzbirimfiyat = 0;
      this.tanimform.patchValue(
        {
          nakliyebedeli: 0
        }
      );
      return;
    }
    /* kemal */

    this.client.getMlzBirimFiyat(sehir).subscribe
      (data => {
        this.mlzbirimfiyat = data;
        var birimfiyat = data['alis_fiyat'];
        if (this.controls.depofiyatitl.value != ''){
          var nakliyesiztutar = this.controls.depofiyatitl.value;
          var nakliyebedeli: number = parseFloat(this.mlzbirimfiyat['alis_fiyat']);
          var nakliyelitutartl: number = parseFloat(nakliyesiztutar + nakliyebedeli);
          var nakliyelitutarusd: number = (nakliyelitutartl / this.usdkur)
          console.log('nakliyesiztutar =', nakliyesiztutar, ' nakliyebedeli=', nakliyebedeli, ' nakliyelitutarusd=', nakliyelitutarusd);

          this.tanimform.patchValue(
            {
              nakliyelidepofiyatitl: (nakliyelitutartl).toFixed(2), // kemal
              nakliyelidepofiyatiusd: (nakliyelitutartl / this.usdkur).toFixed(2),
      
              //tabantutari = this.tabantutari;
              // tavantutari*1 + tdktutari*1 + cdktutari*1 + gergitutari*1 + dikmetutari*1 + silikontutari*1 + yapistiricitutari*1 + civatatutari*1 + lastiktutari*1 + mansontutari*1;   
            });
      
        }

        console.log('gelen fiyat =', data, ' birimfiyat=', birimfiyat);
        this.tanimform.patchValue(
          {
            nakliyebedeli: birimfiyat
          }
        );
        //this.nakliyebedeli = birimfiyat; kemal 
      },
        error => {
          this.mlzbirimfiyat = 0;
          this.tanimform.patchValue(
            {
              nakliyebedeli: 0
            }
          );
          //this.nakliyebedeli = 0; kemal
        });

  }

  //------------------------------------------------------------------------------

  depoKatsayiKontrol(katsayi: number): boolean {
    return katsayi > this.depokatsayisi_value;
  }

  HacimHesapla(depoen, depoboy, depokatsayisi) {
    this.depokatsayisi_value = depokatsayisi;
    var strhacim = Math.round(((depoen * 1.08) * (depoboy * 1.08) * (depokatsayisi * 1.08)));
    this.tanimform.patchValue(
      {
        depohacim: strhacim
      });
  }

/*   DepoFiyatSave(tanimform) {
    this.DepoFiyatHesapla(tanimform);
    console.log('tanimform SAVE >>> ', tanimform);
  } */

  DepoFiyatHesapla(tanimform) {
    //console.log('Gelen bilgi',sacbirimfiyati,tdkbirimfiyati,cdkbirimfiyati,gergibirimfiyati,dikmebirimfiyati,silikonbirimfiyati,yapistiricibirimfiyati,civatabirimfiyati,lastikbirimfiyati)
    this.depokatsayisi_value = tanimform.depokatsayisi * 1;
    console.log(typeof tanimform.depokatsayisi, tanimform.depokatsayisi)

    {
      var mlz_kod = 'MERDİVEN ' + tanimform.depokatsayisi;
      console.log('depo katsayısı:', tanimform.depokatsayisi);
      console.log('mlz kodu:', mlz_kod);
      this.client.getMlzBirimFiyat(mlz_kod).toPromise().then(data => {
        var merfiyat = data['alis_fiyat'];
        this.tanimform.patchValue(
          {
            merdivenbirimfiyati: merfiyat, /*data['alis_fiyat'],*/
          });
        this.merdivenbirimfiyati = merfiyat;
      }).catch(console.log)
    }

    //aşağısı böyle de çalışıyor
    // let mlz_kodu = 'MERDİVEN 1' + depokatsayisi;
    // this.client.getMlzBirimFiyat(mlz_kodu).subscribe
    // (data => 
    //  {
    //    console.log('gelen fiyat =', data);
    //    this.mlzbirimfiyat = data;
    //    this.tanimform.patchValue(
    //    {
    //      merdivenbirimfiyati : data['alis_fiyat'],
    //    }
    //    );
    //  }
    // );

    console.log('tanimform=', tanimform.depoen, tanimform.depoboy, tanimform.depokatsayisi);

    const DepoEn = this.toStringDecimal(tanimform.depoen);
    console.log('DepoEn=', DepoEn);

    var strhacim = Math.round(((DepoEn * 1.08) * (tanimform.depoboy * 1.08) * (tanimform.depokatsayisi * 1.08)));

    var stryarimodulkalinlik = 0;
    var strmodulkatsayisi = 0;
    if ((tanimform.depokatsayisi == '1.5') || (tanimform.depokatsayisi == '2.5')) {
      strmodulkatsayisi = (tanimform.depokatsayisi * 1) - 0.5;

      var strmodulsayisi = Math.round((((tanimform.depoen * 1) + (tanimform.depoboy * 1)) * 2 * (strmodulkatsayisi * 1)));
      var stryarimodulsayisi = ((tanimform.depoen * 1) + (tanimform.depoboy * 1)) * 2;

      if (tanimform.depokatsayisi == '1.5') { stryarimodulkalinlik = tanimform.kalinlik15 };
      if (tanimform.depokatsayisi == '2.5') { stryarimodulkalinlik = tanimform.kalinlik25 };
      // if (depokatsayisi == '3.5') {stryarimodulkalinlik=kalinlik35};
    }
    else {
      strmodulkatsayisi = (tanimform.depokatsayisi * 1);
      var strmodulsayisi = Math.round((((tanimform.depoen * 1) + (tanimform.depoboy * 1)) * 2 * (strmodulkatsayisi * 1)));
      var stryarimodulsayisi = 0;
      stryarimodulkalinlik = 0;
    };

    //var strmodulsayisi = Math.round((((depoen * 1) + (depoboy * 1)) * 2 * (depokatsayisi * 1)));
    //var stryarimodulsayisi = Math.round((((depoen * 1) + (depoboy * 1)) * 2 * (depokatsayisi * 1)));
    var strtabansayisi = (tanimform.depoen * tanimform.depoboy / 2);//Math.round((depoen * depoboy / 2));
    var strtavansayisi = strtabansayisi;
    var strcdksayisi = (tanimform.depokatsayisi * 2);
    var strtdksayisi = ((tanimform.depoen * 1) + (tanimform.depoboy * 1)) * 2;
    var strgergisayisi = (((tanimform.depoen * 1) - 1) * tanimform.depoboy) + (((tanimform.depoboy * 1) - 1) * tanimform.depoen);
    strgergisayisi = strgergisayisi / 2 * tanimform.depokatsayisi;
    var strdikmesayisi = strtavansayisi * tanimform.depokatsayisi / 2;

    //var strgergiparcasayisi = ((depoen*1) -1) + ((depoboy*1) -1) * 2 * depokatsayisi;
    var strsilikonsayisi = ((strmodulsayisi + stryarimodulsayisi + strtabansayisi + strtavansayisi) * .10) + 1;
    var stryapistiricisayisi = ((strmodulsayisi + stryarimodulsayisi + strtabansayisi + strtavansayisi) * .44) + 1;

    var strcivatasayisien1 = ((tanimform.depokatsayisi * 1) + 1) * tanimform.depoen;
    var strcivatasayisien2 = ((tanimform.depoen * 1) + 1) * tanimform.depokatsayisi;
    var strcivatasayisien = (strcivatasayisien1 + strcivatasayisien2) * 28;

    var strcivatasayisiboy4 = ((tanimform.depokatsayisi * 1) + 1) * tanimform.depoboy;
    var strcivatasayisiboy5 = ((tanimform.depoboy * 1) + 1) * tanimform.depokatsayisi;
    var strcivatasayisiboy = (strcivatasayisiboy4 + strcivatasayisiboy5) * 28;

    var strcivatasayisi6 = ((tanimform.depoen - 1) * tanimform.depoboy);
    var strcivatasayisi7 = ((tanimform.depoboy - 1) * tanimform.depoen / 2);
    var strcivatasayisic = (strcivatasayisi6 + strcivatasayisi7) * 28;

    var strcivatasayisigergi = strgergisayisi * 4;
    console.log('civata sayısı en:', strcivatasayisien);
    console.log('civata sayısı boy:', strcivatasayisiboy);
    console.log('civata sayısı ic:', strcivatasayisic);
    console.log('civata sayısı gergi:', strcivatasayisigergi);

    var strcivatasayisi = strcivatasayisien + strcivatasayisiboy + strcivatasayisic + strcivatasayisigergi;
    var strlastiksayisi = (stryarimodulsayisi * 3) + (strmodulsayisi * 4.32) + (strtabansayisi * 7) + (strtavansayisi * 7);

    var strdepoenalt = (tanimform.depoen * 1.08);
    var strdepoboyalt = (tanimform.depoboy * 1.08);


    var strkalinliklartoplami = ((tanimform.kalinlik1 * 1) + (tanimform.kalinlik2 * 1) + (tanimform.kalinlik3 * 1) + (tanimform.kalinlik4 * 1));
    var strortmodulkalinlik = ((strkalinliklartoplami * 1) / (strmodulkatsayisi * 1));

    //strmodulagirlik = 272 kğ olması lazım  katağırlık = katmodulsayısı * katkalınlık * 12.5
    //stryarimodulagirlik=163 kg olması lazım katagirlık = katmodulsayısı * katkalınlık * 7.5

    var strmodulagirlik = (strmodulsayisi * 12.5 * strortmodulkalinlik);//+ (stryarimodulsayisi * 7.5 * strortmodulkalinlik);

    var stryarimodulagirlik = (stryarimodulsayisi * 7.5 * stryarimodulkalinlik);

    var strtabanagirlik = strtabansayisi * 25 * tanimform.tabankalinlik;
    var strtavanagirlik = strtavansayisi * 25 * tanimform.tavankalinlik;

    var strcdkagirlik = strcdksayisi * 1.8 * tanimform.kalinlik1;
    var strtdkagirlik = strtdksayisi * 1.05;

    var strgergiagirlik = strgergisayisi * 6;
    var strdikmeagirlik = strdikmesayisi * 5;

    /////fiyatlar bulunuyor
    var strmodultutari = strmodulagirlik * tanimform.sacbirimfiyati;
    var stryarimodultutari = stryarimodulagirlik * tanimform.sacbirimfiyati;
    var strtabantutari = strtabanagirlik * tanimform.sacbirimfiyati;
    var strtavantutari = strtavanagirlik * tanimform.sacbirimfiyati;
    var strtdktutari = strtdkagirlik * tanimform.sacbirimfiyati;
    var strcdktutari = strcdkagirlik * tanimform.sacbirimfiyati;
    var strgergitutari = strgergiagirlik * tanimform.sacbirimfiyati;
    var strdikmetutari = strdikmeagirlik * tanimform.sacbirimfiyati;
    var strsilikontutari = (strsilikonsayisi * 1) * (tanimform.silikonbirimfiyati * 1);
    var stryapistiricitutari = (stryapistiricisayisi * 1) * (tanimform.yapistiricibirimfiyati * 1);
    var strcivatatutari = (strcivatasayisi * 1) * (this.civatabirimfiyati * 1);
    var strlastiktutari = (strlastiksayisi * 1) * (tanimform.lastikbirimfiyati * 1);
    var strmansontutari = 100;//(strmansonsayisi * 1) * (mansonbirimfiyati * 1);

    //nakliye hesaplaması ve işçilik hesaplaması
    var strnakliyetutari = (strhacim / 20) * (tanimform.nakliyebedeli * 1); // kemal
    var strisciliktutari = (strtabansayisi + strtavansayisi + strmodulsayisi + stryarimodulsayisi) * this.uretimgideri;
    ////fiyatlar bulundu
    console.log('taban sayısı', strtabansayisi);
    console.log('taban kalınlık', tanimform.tabankalinlik);
    console.log('sac fiyatı', tanimform.sacbirimfiyati);
    console.log('taban tutari', strtabantutari);

    this.tanimform.patchValue(
      {
        depohacim: strhacim,
        modulsayisi: strmodulsayisi,
        depoenalt: strdepoenalt,
        depoboyalt: strdepoboyalt,
        yarimodulsayisi: stryarimodulsayisi,

        tabansayisi: strtabansayisi,
        tavansayisi: strtavansayisi,
        cdksayisi: strcdksayisi,
        tdksayisi: strtdksayisi,
        gergisayisi: strgergisayisi,
        dikmesayisi: strdikmesayisi,
        silikonsayisi: strsilikonsayisi,
        yapistiricisayisi: stryapistiricisayisi,
        civatasayisi: strcivatasayisi,
        lastiksayisi: strlastiksayisi,
        kalinliklartoplami: strkalinliklartoplami,
        ortmodulkalinlik: strortmodulkalinlik,

        tabanagirlik: strtabanagirlik,
        tavanagirlik: strtavanagirlik,
        modulagirlik: strmodulagirlik,
        yarimodulagirlik: stryarimodulagirlik,

        cdkagirlik: strcdkagirlik,
        tdkagirlik: strtdkagirlik,

        gergiagirlik: strgergiagirlik,
        dikmeagirlik: strdikmeagirlik,

        modultutari: strmodultutari,
        yarimodultutari: stryarimodultutari,
        tabantutari: strtabantutari,
        tavantutari: strtavantutari,
        tdktutari: strtdktutari,
        cdktutari: strcdktutari,
        gergitutari: strgergitutari,
        dikmetutari: strdikmetutari,
        silikontutari: strsilikontutari,
        yapistiricitutari: stryapistiricitutari,
        civatatutari: strcivatatutari,
        lastiktutari: strlastiktutari,
        mansontutari: strmansontutari,
        isciliktutari: strisciliktutari,
        nakliyetutari: strnakliyetutari
      });
    //burası hacimhesapla modülü. hacimhesaplıyor sonra fiyat hesaplıyor...
    //console.log('tanimform=', depoen, kalinlik1, kalinlik2, kalinlik3);

    var depofiyati = strmodultutari * 1 + stryarimodultutari * 1 + strtabantutari * 1 + strtavantutari * 1 + strtdktutari * 1 + strcdktutari * 1 + strgergitutari * 1 + strdikmetutari * 1 + strsilikontutari * 1 + stryapistiricitutari * 1 + strcivatatutari * 1 + strlastiktutari * 1 + strmansontutari * 1;
    depofiyati = depofiyati + strisciliktutari;
    this.tanimform.patchValue(
      {
        nakliyelidepofiyatitl: (depofiyati * 1 + strnakliyetutari).toFixed(2), // kemal
        nakliyelidepofiyatiusd: ((depofiyati * 1 + strnakliyetutari * 1) / tanimform.usdkur).toFixed(2),
        depofiyatitl: (depofiyati * 1).toFixed(2),
        depofiyatiusd: ((depofiyati * 1) / tanimform.usdkur).toFixed(2),

        //tabantutari = this.tabantutari;
        // tavantutari*1 + tdktutari*1 + cdktutari*1 + gergitutari*1 + dikmetutari*1 + silikontutari*1 + yapistiricitutari*1 + civatatutari*1 + lastiktutari*1 + mansontutari*1;   
      });
  }

  //  let mlz_kodu = '1';
  //   this.client.getMlzBirimFiyat(mlz_kodu).subscribe
  //   (data => 
  //    {
  //      console.log('gelen fiyat =', data);
  //      this.mlzbirimfiyat = data;
  //      this.tanimform.patchValue(
  //      {
  //        civatabirimfiyati : data[0].alis_fiyat
  //      }
  //      );
  //    }
  //   );
  
  toStringDecimal(sayi) {
    if (sayi == '') { sayi = '0'; }
    //var yenisayi = parseFloat(sayi.replace(',', '').replace('.', '.'));
    var yenisayi = parseFloat(sayi.replace(',', '.'));
    if (yenisayi == null) { yenisayi = 0; }
    return yenisayi;
  }

  DepoFiyatSave() {

      const ModulerSuDeposuHesap = new ModulerSuDeposu();

      ModulerSuDeposuHesap.cari_kodu = this.authenticationService.currentUserSubject.value.model.value[0]['personel_cari_kodu'];
      ModulerSuDeposuHesap.cari_ad_unvan = this.authenticationService.currentUserSubject.value.model.value[0]['personel_cari_ad_unvan'];
      ModulerSuDeposuHesap.ref_no = 0;
      if(this.edit_ref_no) {ModulerSuDeposuHesap.ref_no = this.edit_ref_no;}
      ModulerSuDeposuHesap.depo_tipi = this.controls.depotipi.value;
      ModulerSuDeposuHesap.depo_en = this.controls.depoen.value;
      ModulerSuDeposuHesap.depo_boy = this.controls.depoboy.value;
      ModulerSuDeposuHesap.depo_kat_sayisi = this.controls.depokatsayisi.value;
      ModulerSuDeposuHesap.depo_hacim = this.controls.depohacim.value;
      ModulerSuDeposuHesap.depo_taban_kalinlik = this.controls.tabankalinlik.value;
      ModulerSuDeposuHesap.depo_tavan_kalinlik = this.controls.tavankalinlik.value;
      ModulerSuDeposuHesap.depo_1_kalinlik = this.controls.kalinlik1.value;
      ModulerSuDeposuHesap.depo_15_kalinlik = this.controls.kalinlik15.value;
      ModulerSuDeposuHesap.depo_2_kalinlik = this.controls.kalinlik2.value;
      ModulerSuDeposuHesap.depo_25_kalinlik = this.controls.kalinlik25.value;
      ModulerSuDeposuHesap.depo_3_kalinlik = this.controls.kalinlik3.value;
      ModulerSuDeposuHesap.depo_35_kalinlik = this.controls.kalinlik35.value;
      ModulerSuDeposuHesap.depo_4_kalinlik = this.controls.kalinlik4.value;;
      ModulerSuDeposuHesap.manson_giris_cap = this.controls.giriscap.value;
      ModulerSuDeposuHesap.manson_giris_adet = this.controls.girisadet.value;
      ModulerSuDeposuHesap.manson_cikis_cap = this.controls.cikiscap.value;
      ModulerSuDeposuHesap.manson_cikis_adet = this.controls.cikisadet.value;
      ModulerSuDeposuHesap.manson_bosaltma_cap = this.controls.bosaltmacap.value;
      ModulerSuDeposuHesap.manson_bosaltma_adet = this.controls.bosaltmaadet.value;
      ModulerSuDeposuHesap.manson_tasma_cap = this.controls.tasmacap.value;
      ModulerSuDeposuHesap.manson_tasma_adet = this.controls.tasmaadet.value;
      ModulerSuDeposuHesap.manson_ekstra_cap = this.controls.mansonekstracap.value;
      ModulerSuDeposuHesap.manson_ekstra_adet = this.controls.ekstraadet.value;
      ModulerSuDeposuHesap.satis_temsilcisi = this.authenticationService.currentUserSubject.value.username;
      //ModulerSuDeposuHesap.il_adi = this.controls
      //ModulerSuDeposuHesap.ulke_adi = this.controls
      ModulerSuDeposuHesap.depo_tutari = this.controls.depofiyatitl.value;
      //ModulerSuDeposuHesap.doviz_cinsi = this.controls      
      ModulerSuDeposuHesap.doviz_kur = this.controls.usdkur.value; //ModulerSuDeposuHesap.doviz_kur = this.controls.dovizkuru.value;
      ModulerSuDeposuHesap.dovizli_tutar = this.controls.depofiyatiusd.value;
      ModulerSuDeposuHesap.aciklama = this.controls.aciklama.value;
      ModulerSuDeposuHesap.kayit_tarihi = new Date;
      //ModulerSuDeposuHesap.kayit_yapan = this.controls
      ModulerSuDeposuHesap.sac_birim_fiyat = this.controls.sacbirimfiyati.value;
      ModulerSuDeposuHesap.merdiven_birim_fiyat = this.controls.merdivenbirimfiyati.value;
      ModulerSuDeposuHesap.manson_birim_fiyat = this.controls.mansonbirimfiyati.value;
      ModulerSuDeposuHesap.ust_kapak_birim_fiyat = this.controls.ustkapakbirimfiyati.value;
      ModulerSuDeposuHesap.seviye_gosterge_birim_fiyat = this.controls.suseviyebirimfiyati.value;
      ModulerSuDeposuHesap.tdk_birim_fiyat = this.controls.tdkbirimfiyati.value;
      ModulerSuDeposuHesap.cdk_birim_fiyat = this.controls.cdkbirimfiyati.value;
      ModulerSuDeposuHesap.gergi_birim_fiyat = this.controls.gergibirimfiyati.value;
      ModulerSuDeposuHesap.dikme_birim_fiyat = this.controls.dikmebirimfiyati.value;
      ModulerSuDeposuHesap.civata_birim_fiyat = this.controls.civatabirimfiyati.value;
      ModulerSuDeposuHesap.silikon_birim_fiyat = this.controls.silikonbirimfiyati.value;
      ModulerSuDeposuHesap.yapistirici_birim_fiyat = this.controls.yapistiricibirimfiyati.value;
      ModulerSuDeposuHesap.lastik_birim_fiyat = this.controls.lastikbirimfiyati.value;
      ModulerSuDeposuHesap.modul_sayisi = this.controls.modulsayisi.value;
      ModulerSuDeposuHesap.yari_modul_sayisi = this.controls.yarimodulsayisi.value;
      ModulerSuDeposuHesap.taban_sayisi = this.controls.tabansayisi.value;
      ModulerSuDeposuHesap.tavan_sayisi = this.controls.tavansayisi.value;
      ModulerSuDeposuHesap.tdk_sayisi = this.controls.tdksayisi.value;
      ModulerSuDeposuHesap.cdk_sayisi = this.controls.cdksayisi.value;
      ModulerSuDeposuHesap.gergi_sayisi = this.controls.gergisayisi.value;
      ModulerSuDeposuHesap.dikme_sayisi = this.controls.dikmesayisi.value;
      ModulerSuDeposuHesap.civata_sayisi = this.controls.civatasayisi.value;
      ModulerSuDeposuHesap.silikon_sayisi = this.controls.silikonsayisi.value;
      ModulerSuDeposuHesap.yapistirici_sayisi = this.controls.yapistiricisayisi.value;
      ModulerSuDeposuHesap.lastik_sayisi = this.controls.lastiksayisi.value;
      ModulerSuDeposuHesap.modul_agirlik = this.controls.modulagirlik.value;
      ModulerSuDeposuHesap.yari_modul_agirlik = this.controls.yarimodulagirlik.value;
      ModulerSuDeposuHesap.taban_agirlik = this.controls.tabanagirlik.value;
      ModulerSuDeposuHesap.tavan_agirlik = this.controls.tavanagirlik.value;
      ModulerSuDeposuHesap.tdk_agirlik = this.controls.tdkagirlik.value;
      ModulerSuDeposuHesap.cdk_agirlik = this.controls.cdkagirlik.value;
      ModulerSuDeposuHesap.gergi_agirlik = this.controls.gergiagirlik.value;
      ModulerSuDeposuHesap.dikme_agirlik = this.controls.dikmeagirlik.value;
      ModulerSuDeposuHesap.modul_tutari = this.controls.modultutari.value;
      ModulerSuDeposuHesap.yari_modul_tutari = this.controls.yarimodultutari.value;
      ModulerSuDeposuHesap.taban_tutari = this.controls.tabantutari.value;
      ModulerSuDeposuHesap.tavan_tutari = this.controls.tavantutari.value;
      ModulerSuDeposuHesap.tdk_tutari = this.controls.tdktutari.value;
      ModulerSuDeposuHesap.cdk_tutari = this.controls.cdktutari.value;
      ModulerSuDeposuHesap.gergi_tutari = this.controls.gergitutari.value;
      ModulerSuDeposuHesap.dikme_tutari = this.controls.dikmetutari.value;
      ModulerSuDeposuHesap.civata_tutari = this.controls.civatatutari.value;
      ModulerSuDeposuHesap.silikon_tutari = this.controls.silikontutari.value;
      ModulerSuDeposuHesap.yapistirici_tutari = this.controls.yapistiricitutari.value;
      ModulerSuDeposuHesap.lastik_tutari = this.controls.lastiktutari.value;
      ModulerSuDeposuHesap.manson_tutari = this.controls.mansontutari.value;
      ModulerSuDeposuHesap.nakliye_tutari = this.controls.nakliyetutari.value;
      ModulerSuDeposuHesap.iscilik_tutari = this.controls.isciliktutari.value;
      ModulerSuDeposuHesap.kalinliklar_toplami = this.controls.kalinliklartoplami.value;
      ModulerSuDeposuHesap.ortalama_modul_kalinlik = this.controls.ortmodulkalinlik.value;
      ModulerSuDeposuHesap.islem_durumu = 0;
      //ModulerSuDeposuHesap.parca_sayisi = this.controls.

      this.client.HesapKaydet(ModulerSuDeposuHesap).subscribe(data => {
        if (data == 'ok'){
          console.log('Kayıt Başarılı.')
          const Toast = Swal.mixin({
            toast: true,
            showConfirmButton: false,
          });
          Toast.fire({
            position: 'center',
            title: 'Kayıt Başarılı',
            icon: 'success',
            timer: 1500
          });
          //this.formuTemizle();
        }
      }, error => {
        Swal.fire(
          'Kayıt Başarısız',
          error.error,
          'error')
      });
  }

  ngOnDestroy(): void {
  }
}
