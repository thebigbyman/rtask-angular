import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {SidenavService} from '../../service/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav', {static: true}) public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.sidenav.autoFocus = false;
    this.sidenavService.setSidenav(this.sidenav);
  }

}
