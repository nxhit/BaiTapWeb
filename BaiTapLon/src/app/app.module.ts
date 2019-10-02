import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

const routesConfig: Routes = [
  { path: '', component: TrangchuComponent},
  { path: 'trangchu', component: TrangchuComponent},
  { path: 'danhmucmonhoc', component: DanhmucmonhocComponent},
  { path: 'gioithieu', component: GioithieuComponent},
  { path: 'lienhe', component: LienheComponent},
  { path: 'gopy', component: GopyComponent},
  { path: 'hoidap', component: HoidapComponent},
  { path: 'dangky', component: DangkyComponent},
  { path: 'dangnhap', component: DangnhapComponent},
  { path: 'quenmatkhau', component: QuenmatkhauComponent},
  { path: 'doimatkhau', component: DoimatkhauComponent},
  { path: 'capnhattaikhoan', component: SuadoithongtinComponent},
  { path: 'trangthi', component: TrangthiComponent}
];

import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { SuadoithongtinComponent } from './suadoithongtin/suadoithongtin.component';
import { TrangthiComponent } from './trangthi/trangthi.component';
import { DanhmucmonhocComponent } from './danhmucmonhoc/danhmucmonhoc.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    GioithieuComponent,
    LienheComponent,
    GopyComponent,
    HoidapComponent,
    DangnhapComponent,
    DangkyComponent,
    QuenmatkhauComponent,
    DoimatkhauComponent,
    SuadoithongtinComponent,
    TrangthiComponent,
    DanhmucmonhocComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesConfig),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
