import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  @Input() productName: string | undefined;
  @Output() productClicked = new EventEmitter();

  constructor(){}

  ngOnInit() {
    
  }
  onClicked(){
    this.productClicked.emit();
  }

}
