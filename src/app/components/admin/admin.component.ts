
import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orders: any | undefined;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(orders => {
        let json = JSON.stringify(orders);
        this.orders = JSON.parse(orders as string).data
      });
  }
}
