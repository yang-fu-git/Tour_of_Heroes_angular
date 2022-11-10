import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { } //Angular injects the singleton MessageService into that property when it creates the MessagesComponent. public,bind to it in the template.


  ngOnInit(): void {
  }

}
