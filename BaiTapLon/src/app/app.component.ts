import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'DANH MỤC MÔN HỌC';
    danhmucmonhoc = [
        {
            "Id": "ADAV",
            "Name": "Lập trình Android nâng cao",
            "Logo": "assets/images/logos/ADAV.jpg"
        },
        {
            "Id": "ADBS",
            "Name": "Lập trình Android cơ bản",
            "Logo": "assets/images/logos/ADBS.jpg"
        },
        {
            "Id": "ADTE",
            "Name": "Kiểm thử và triển khai ứng dụng Android",
            "Logo": "assets/images/logos/ADTE.jpg"
        },
        {
            "Id": "ADUI",
            "Name": "Thiết kế giao diện trên Android",
            "Logo": "assets/images/logos/ADUI.jpg"
        },
        {
            "Id": "ASNE",
            "Name": "Lập trình ASP.NET",
            "Logo": "assets/images/logos/ASNE.png"
        },
        {
            "Id": "CLCO",
            "Name": "Điện toán đám mây",
            "Logo": "assets/images/logos/CLCO.jpg"
        },
        {
            "Id": "DBAV",
            "Name": "SQL Server",
            "Logo": "assets/images/logos/DBAV.png"
        },
        {
            "Id": "DBBS",
            "Name": "Cơ sở dữ liệu",
            "Logo": "assets/images/logos/DBBS.png"
        },
        {
            "Id": "GAME",
            "Name": "Lập trình game 2D",
            "Logo": "assets/images/logos/GAME.png"
        },
        {
            "Id": "HTCS",
            "Name": "HTML5 và CSS3",
            "Logo": "assets/images/logos/HTCS.jpg"
        },
        {
            "Id": "INMA",
            "Name": "Internet Marketing",
            "Logo": "assets/images/logos/INMA.jpg"
        },
        {
            "Id": "JAAV",
            "Name": "Lập trình Java nâng cao",
            "Logo": "assets/images/logos/JAAV.png"
        },
        {
            "Id": "JABS",
            "Name": "Lập trình hướng đối tượng với Java",
            "Logo": "assets/images/logos/JABS.png"
        },
        {
            "Id": "JSPR",
            "Name": "Lập trình JavaScript",
            "Logo": "assets/images/logos/JSPR.png"
        },
        {
            "Id": "LAYO",
            "Name": "Thiết kế layout",
            "Logo": "assets/images/logos/LAYO.jpg"
        },
        {
            "Id": "MOWE",
            "Name": "Thiết kế web cho điện thoại di động",
            "Logo": "assets/images/logos/MOWE.png"
        },
        {
            "Id": "PHPP",
            "Name": "Lập trình PHP",
            "Logo": "assets/images/logos/PHPP.png"
        },
        {
            "Id": "PMAG",
            "Name": "Quản lý dự án với Agile",
            "Logo": "assets/images/logos/PMAG.jpg"
        },
        {
            "Id": "VBPR",
            "Name": "Lập trình VB.NET",
            "Logo": "assets/images/logos/VBPR.png"
        },
        {
            "Id": "WEBU",
            "Name": "Xây dựng trang web",
            "Logo": "assets/images/logos/WEBU.jpg"
        }
    ];
    isshow = true;
    Username;
    anhien = false;
    constructor(private ds: DataService, private router: Router) {
    }


    ngOnInit() {
    }
    // Đăng xuất
    exit() {
        if (this.ds.checkdangnhap == false) {
            alert('Vui lòng đăng nhập!')
            this.router.navigate(['/dangnhap'])
        }
        if (this.ds.checkdangnhap == true) {
            alert('Bạn đã đăng xuất!')
            this.router.navigate(['/dangnhap'])
            this.ds.checkdangnhap = false;
            console.log(this.ds.checkdangnhap)
        }
        console.log(this.anhien)
    }
    //Đăng nhập
    checkdangnhap() {
        if (this.ds.checkdangnhap == false) {
            alert('Vui lòng đăng nhập!')
            this.router.navigate(['/dangnhap'])
        }
    }
    check() {
        if (this.ds.checkdangnhap == false) {
            alert('Bạn chưa đăng nhập. Vui lòng đăng nhập để thực hiện chức năng này!')
            this.router.navigate(['/dangnhap'])
        }
    }
    getisShow() {
        if (this.ds.checkdangnhap == true) {
            this.Username = this.ds.username;

            return false;
        }
        else {
            return true;
        }

    }

}

