import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductsService } from "./products.service";

@Component({
    selector: 'app-products',
    templateUrl: './products.Component.html'
})
export class ProductsComponent implements OnInit, OnDestroy{
    productName = 'A book'
    isDisabled = true;
    products: any[] = [];
    private productsSubscription!: Subscription;


    constructor(private productsService: ProductsService){
        

        setTimeout(()=>{
            // this.productName = 'A Tree';
            this.isDisabled = false;
            // this.products = this.productsService.getProducts();
        }, 3000);
    }

    ngOnInit(){
        this.products = this.productsService.getProducts();
        this.productsSubscription = this.productsService.productsUpdated.subscribe(() =>{
            this.products = this.productsService.getProducts();
        });
    }

    onAddProduct(form: any){
        // this.products.push(this.productName);
        // console.log(from);
        if(form.valid) {
            this.products.push(form.value.productName);
        }
    }

    onRemoveProduct(productName: string){
       this.products = this.products.filter(p => p !== productName);
    }

    ngOnDestroy() {
        this.productsSubscription?.unsubscribe();
    }
}