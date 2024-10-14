import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PRODUCT_DATA } from 'src/app/data/product.data';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatIconModule, FormsModule],
})
export class HomeComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'proveedor', 'responsable', 'observaciones'];
  dataSource = new MatTableDataSource<Products>(PRODUCT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

}


