import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { DataService } from '../data.service'

@Component({
  selector: 'app-trangthi',
  templateUrl: './trangthi.component.html',
  styleUrls: ['./trangthi.component.css']
})
export class TrangthiComponent implements OnInit {
  checkdata = this.ds.checkdangnhap;

  dapandung;
  id: string;
  name: string;
  quiz: any;
  url: string;
  data;
  thongtin = {
    valuee: 0,
  };
  hieninput = false;
  hiennextpage = false;
  hienprevious = true;
  hiensubmit = false;
  hienfirstpage = true;
  hienlastpage = false;
  mark = 0;

  //Phân trang
  constructor(private ds: DataService,
    private route: ActivatedRoute, private router: Router
  ) {

  }


  ngOnInit() {
    if (this.ds.checkdangnhap == false) {
      this.router.navigate(['/dangnhap'])
    }
    else {
      this.route.paramMap.subscribe(
        para => {
          this.id = para.get('Id');
          this.name = para.get('Name');
        });
      this.url = 'assets/db/Quizs/' + this.id + '.json';
      this.ds.getQuiz(this.url).subscribe((data) => {
        this.quiz = data;
      });
    }
  }

  sodong = 1;
  sotrang = 1;

  checkradio() {
    if (this.hieninput === false) {

    }

  }
  firstpage() {
    this.hienprevious = true;
    this.hienfirstpage = true;
    this.hiennextpage = false;
    this.sotrang = 1;
  }
  lastpage() {
    this.hiennextpage = true;
    this.hienprevious = false;
    this.sotrang = this.quiz.length;
  }
  previouspage() {
    this.hiennextpage = false;
    if (this.sotrang > 1) {
      this.sotrang--;
    }
    else {
      this.hienprevious = true;
      this.hienfirstpage = true;
    }
  }
  nextpage() {
    this.hieninput = false;
    this.hienfirstpage = false;
    this.hienprevious = false;
    this.hiennextpage = false;
    this.sotrang++;
    if (this.sotrang == this.quiz.length) {
      this.hiennextpage = true;
    }
  }
  tinhdiem(dapanId, mangDapAn) {
    if (this.thongtin.valuee == dapanId) {
      this.mark++;
    }
    else {
      this.dapandung = mangDapAn.find(x => {
        return x.Id == dapanId;
      });
    }
  }
  nopbai() {
    alert('Bài thi bạn đạt được:' + this.mark + ' điểm');
    this.router.navigate(['/danhmucmonhoc']);
  }


}
