import { Injectable } from '@nestjs/common';  
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/seed';

@Injectable()
export class SeedService {
  constructor( 
    private readonly productService: ProductsService,
  ){}
  async executeSeed(){
    await this.insertNewProduct();
    return 'SEED EXECUTE';
  }

  private async insertNewProduct(){
    const products = initialData.products;
    await this.productService.deleteAllProduct();
    const insertProimise = [];
    products.forEach(product =>{
      insertProimise.push( this.productService.create(product));
    });

    await Promise.all(insertProimise);
    return true;
  }
}
