import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhmucmonhoc',
  templateUrl: './danhmucmonhoc.component.html',
  styleUrls: ['./danhmucmonhoc.component.css']
})
export class DanhmucmonhocComponent implements OnInit {
  title='DANH MỤC MÔN HỌC';
  danhmucmonhoc = [
    {
        "Id": "ADAV",
        "Name": "Lập trình Android nâng cao",
        "Logo": "ADAV.jpg"
    },
    {
        "Id": "ADBS",
        "Name": "Lập trình Android cơ bản",
        "Logo": "ADBS.jpg"
    },
    {
        "Id": "ADTE",
        "Name": "Kiểm thử và triển khai ứng dụng Android",
        "Logo": "ADTE.jpg"
    },
    {
        "Id": "ADUI",
        "Name": "Thiết kế giao diện trên Android",
        "Logo": "ADUI.jpg"
    },
    {
        "Id": "ASNE",
        "Name": "Lập trình ASP.NET",
        "Logo": "ASNE.png"
    },
    {
        "Id": "CLCO",
        "Name": "Điện toán đám mây",
        "Logo": "CLCO.jpg"
    },
    {
        "Id": "DBAV",
        "Name": "SQL Server",
        "Logo": "DBAV.png"
    },
    {
        "Id": "DBBS",
        "Name": "Cơ sở dữ liệu",
        "Logo": "DBBS.png"
    },
    {
        "Id": "GAME",
        "Name": "Lập trình game 2D",
        "Logo": "GAME.png"
    },
    {
        "Id": "HTCS",
        "Name": "HTML5 và CSS3",
        "Logo": "HTCS.jpg"
    },
    {
        "Id": "INMA",
        "Name": "Internet Marketing",
        "Logo": "INMA.jpg"
    },
    {
        "Id": "JAAV",
        "Name": "Lập trình Java nâng cao",
        "Logo": "JAAV.png"
    },
    {
        "Id": "JABS",
        "Name": "Lập trình hướng đối tượng với Java",
        "Logo": "JABS.png"
    },
    {
        "Id": "JSPR",
        "Name": "Lập trình JavaScript",
        "Logo": "JSPR.png"
    },
    {
        "Id": "LAYO",
        "Name": "Thiết kế layout",
        "Logo": "LAYO.jpg"
    },
    {
        "Id": "MOWE",
        "Name": "Thiết kế web cho điện thoại di động",
        "Logo": "MOWE.png"
    },
    {
        "Id": "PHPP",
        "Name": "Lập trình PHP",
        "Logo": "PHPP.png"
    },
    {
        "Id": "PMAG",
        "Name": "Quản lý dự án với Agile",
        "Logo": "PMAG.jpg"
    },
    {
        "Id": "VBPR",
        "Name": "Lập trình VB.NET",
        "Logo": "VBPR.png"
    },
    {
        "Id": "WEBU",
        "Name": "Xây dựng trang web",
        "Logo": "WEBU.jpg"
    }
];
// Phần phân trang
config: any;
collection = { count: 20, data: [] };
  constructor() {
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "items number " + (i + 1)
        }
      );
    }
 
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
   

  ngOnInit() {
  }

}
