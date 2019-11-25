import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';


const routesConfig: Routes = [
  { path: '', component: TrangchuComponent },
  { path: 'trangchu', component: TrangchuComponent },
  { path: 'danhmucmonhoc', component: DanhmucmonhocComponent },
  { path: 'gioithieu', component: GioithieuComponent },
  { path: 'lienhe', component: LienheComponent },
  { path: 'gopy', component: GopyComponent },
  { path: 'hoidap', component: HoidapComponent },
  { path: 'dangki', component: DangkiComponent },
  { path: 'dangnhap', component: DangnhapComponent },
  { path: 'quenmatkhau', component: QuenmatkhauComponent },
  { path: 'doimatkhau', component: DoimatkhauComponent },
  { path: 'capnhattaikhoan', component: SuadoitaikhoanComponent },
  { path: 'trangthi/:Name/:Id', component: TrangthiComponent },
  { path: '**', component: PageNotFoundComponent },

];

import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { DangkiComponent } from './dangki/dangki.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { SuadoitaikhoanComponent } from './suadoitaikhoan/suadoitaikhoan.component';
import { DanhmucmonhocComponent } from './danhmucmonhoc/danhmucmonhoc.component';
import { TrangthiComponent } from './trangthi/trangthi.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { PageNotFoundComponent } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    GioithieuComponent,
    GopyComponent,
    HoidapComponent,
    DangkiComponent,
    DangnhapComponent,
    DoimatkhauComponent,
    SuadoitaikhoanComponent,
    DanhmucmonhocComponent,
    TrangthiComponent,
    LienheComponent,
    QuenmatkhauComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
