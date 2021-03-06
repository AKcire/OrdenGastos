import { Component, OnInit } from '@angular/core';
import { Orden } from 'app/models/orden';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenService } from 'app/services/orden.service';
import * as jsPDF from 'jspdf';
import { OrdenPdf } from 'app/models/orden-pdf';
@Component({
  selector: 'app-orden-detail',
  templateUrl: './orden-detail.component.html',
  styleUrls: ['./orden-detail.component.scss']
})
export class OrdenDetailComponent implements OnInit {

  id: number;
ordenGasto: Orden;
orden: OrdenPdf;
  date: Date;
  title = 'PDFs';
  docPdf: jsPDF;
  pdfData: any[]

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ordenService: OrdenService ){ }

  ngOnInit() {
    this.ordenGasto = new Orden();
    this.id = this.route.snapshot.params['id'];
    this.FindOrden();
    this.DatosPdf();
    
  }
  FindOrden(){
    this.ordenService.getOrdenGasto(this.id)
    .subscribe(data => {
      console.log(data)
      this.ordenGasto = data;
    }, error => console.log(error));
  }
  list(){
    this.router.navigate(['list-orden']);
  }
DatosPdf(){
  this.ordenService.getOrdenF(this.id)
      .subscribe(data => {
        console.log(data)
        this.orden = data;
      }, error => console.log(error));
}
  pdf() {
    let  x=19;
    let  y=25;
    let  size=14;
    let logo = new Image();
    var fecha = Date();
    logo.src = "../../../assets/img/Espe-Angular-Logo.png";
    let doc = new jsPDF({
      orientation: 'L',
      unit: 'mm',
      format: 'A4',
      compress: true,
    })
   

    //MODAL IMAGEN-LOGO ESPE
    var width = doc.internal.pageSize.getWidth();    
    var height = doc.internal.pageSize.getHeight();
    doc.addImage(logo,x+84,15, 75, 14);
    doc.setFontSize(8);
    doc.setFontType('bold');
    doc.text('UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE',x+92,y+7);
    doc.text('ÓRDEN DE GASTOS',x+112,y+10);

  

    // MODAL PREPARADOR POR:
    doc.setFontSize(6);
    doc.setTextColor(0, 0, 0);
    doc.setFontStyle('arial');
    doc.text('______________________________________________',x+23,y+150,{minWidth:90});
    doc.text('ING MONICA ARMAS',x+37,y+153,{minWidth:90});
    doc.text('C.l. 0501722508',x+39,y+155,{minWidth:85});
    doc.text('RESPONSABLE DE LA PLANIFICACION Y',x+28,y+157,{minWidth:90});
    doc.text('EJECUCIÓN PRESUPUESTARIA DE LA UNIDAD',x+26,y+159,{minWidth:90});
    doc.text('DE TECNOLOGÍAS DE LA INFORMACION Y',x+28,y+161,{minWidth:90});
    doc.text('COMUNICACIONES',x+37,y+163,{minWidth:90});
    doc.setFontSize(7.5);
    doc.setTextColor(0, 0, 0);
    doc.setFontStyle('arial');
    doc.setFontType('bold');
    doc.text('PREPARADO POR:',x+37.5,y+133,{minWindth:90});


    // MODAL AUTORIZADOR POR:
    doc.setFontSize(6);
    doc.setTextColor(0,0,0);
    doc.setFontStyle('arial');
    doc.text('______________________________________________',x+172,y+150,{minWidth:90});
    doc.text('ING.ROMEL ASITIMBAY MORALES ',x+180,y+153,{minWidth:90});
    doc.text('C.l. 1711387611',x+190,y+155,{minWidth:90});
    doc.text('DIRECTOR DE LA UNIDAD DE TECNOLOGÍAS DE ',x+173,y+158,{minWidth:90});
    doc.text('LA INFORMACION Y COMNICACION',x+179,y+160,{minWidth:90});
    doc.setFontType("bold");
    doc.text('ORDENADOR DE GASTO', x+186, y+164,{minWidth:90});
    doc.setFontSize(7.5);
    doc.setTextColor(0, 0, 0);
    doc.setFontStyle('arial');
    doc.setFontType('bold');
    doc.text('AUTORIZADO POR:',x+183,y+133,{minWidth:90});



    //MODAL SECCIÓN-1
    doc.setFontSize(9);
    doc.setFontStyle('arial');
    doc.setTextColor(0, 0, 0);
    doc.text('SECCIÓN l - IDENTICACIÓN DE LA ORDEN DE GASTO',x,y+23);
    doc.setFontSize(7)
    doc.setFontStyle('arial')
    doc.setTextColor(0,0,0);
    doc.text(`N°:   OG-2019-00${this.orden[0].uzftorder_NUMERO}-UTIC`,x,y+28);
    doc.text(`Fecha: ${this.orden[0].uzftorder_FECHA}`,x,y+31.5);
    doc.text('_______________________________________________________________________________________________________________________________________________________________________________________________________________',x,y+33);
     

    //MODAL SECCIÓN-2
    doc.setFontSize(9);
    doc.setFontStyle('arial');
    doc.setTextColor(0, 0, 0);
    doc.text('SECCIÓN II - INFORMACIÓN DE LA CONTRATACIÓN',x,y+38);
    doc.setFontSize(7)
    doc.setFontStyle('arial')
    doc.setTextColor(0,0,0);
    doc.text(`N° Contrato/Orden de Compra/Contratación:     2019-00${this.orden[0].uzftcontrato_NUMERO_CONTRATO}-ESPE-e-3`,x,y+42);
    doc.text('OBJETO DE LA CONTRATACIÓN:   ',x,y+46);
    doc.text(`${this.orden[0].uzftcontrato_OBJETO_CONTRATA}`,x+50.9, y+46);


    //MODAL SECCIÓN-3
    doc.setFontSize(9);
    doc.setFontStyle('arial');
    doc.setTextColor(0, 0, 0);
    doc.text('SECCIÓN III - INFORMACIÓN DEL CONTRATISTA',x,y+53);
    doc.setFontSize(7)
    doc.setFontStyle('arial')
    doc.setTextColor(0,0,0);
    doc.text('NOMBRE: ',x,y+57);
    doc.text(`${this.orden[0].uzftprovider_NOMBRE}`,x+21.9, y+57)
    doc.text('RUC:',x,y+61);
    doc.text(`${this.orden[0].uzftprovider_RUC}`,x+21.9, y+61);
   


    //MODAL SECCIÓN-4 "INFORMACION DE LA FACTURA"

    doc.setFontSize(6.5);
    doc.setFontStyle('arial');
    doc.setTextColor(0,0,0);
    doc.setFontType('bold');
    doc.text('SECCIÓN IV - INFORMACIÓN DE LA FACTURA',x+9,y+72.5);
    doc.text('ORD',x+1,y+77.5);
    doc.setFontStyle('arial');
    doc.text(`${this.orden[0].uzftorder_ID}`,x+2.5,y+90.5);
    doc.setFontType('bold');
    doc.text('DESCRIPCIÓN',x+11,y+77.5);
    doc.setFontStyle('arial');
    doc.setFontSize(4.5);
    doc.text(`${this.orden[0].uzftcontrato_OBJETO_CONTRATA}`,x+11,y+84.5,{align:'justify', maxWidth: 20});
    doc.setFontSize(6.5);
    doc.text(`${this.orden[0].uzftorder_MES}`,x+12.5, y+96.5)
    doc.setFontType('bold');
    doc.text('CANTIDAD',x+33, y+77.5);
    doc.setFontStyle('arial');
    doc.text(`${this.orden[0].uzftorder_CANTIDAD}`,x+33, y+90.5);
    doc.setFontType('bold');
    doc.text('PRECIO ',x+52.5, y+77.5);
    doc.setFontStyle('arial');
    doc.text(`${this.orden[0].uzftorder_PRECIO_UNITARIO}`,x+50.9, y+90.5);
    doc.setFontType('bold');
    doc.text('UNITARIO',x+50.9,y+79.5);
    doc.text('SUBTOTAL', x+67, y+77.5);
    doc.setFontStyle('arial');
    doc.text(`${this.orden[0].uzftorder_SUBTOTAL}`,x+67, y+90.5);
    doc.setFontType('bold');
    doc.text('IVA ',x+87, y+77.5);//1
    doc.text('12%',x+87,y+79.5);//1.1
    doc.setFontStyle('arial');
    doc.text(`${this.orden[0].uzftorder_IVA}`,x+85, y+90.5);
    doc.setFontType('bold');
    doc.text('OTROS ',x+102, y+77.5);
    doc.text('IMPUESTOS',x+99.9, y+79.5);
    doc.setFontStyle('arial');
    doc.text(`${this.orden[0].uzftorder_OTRO_IMPUESTO}`,x+99.9, y+90.5);
    doc.setFontType('bold');
    doc.text('TOTAL', x+120, y+77.5);
    doc.setFontStyle('arial');
    doc.text(`${this.orden[0].uzftorder_TOTAL}`,x+119, y+90.5);
    doc.setFontType('bold');
    doc.text('TOTAL DE LA ORDEN DE GASTO',x+15,y+107.5);
    doc.text(`${this.orden[0].uzftorder_SUBTOTAL}`, x+67, y+107.5);
    doc.text(`${this.orden[0].uzftorder_IVA}`, x+85, y+107.5);
    doc.text(`${this.orden[0].uzftorder_OTRO_IMPUESTO}`, x+99.9, y+107.5);
    doc.text(`${this.orden[0].uzftorder_TOTAL}`,x+120, y+107.5);
    doc.text(`${this.orden[0].uzftorder_TOTAL}`, x+219.5, y+107.5);



    //MODAL SECCIÓN 5 INFORMACON PRESUPESTARIA PARA EL GASTO 
    doc.text('SECCIÓN V - INFORMACIÓN PRESUPUESTARIA PARA EL GASTO',x+162,y+72.5);
    doc.text('CÓDIGO',x+139,y+77.5);//2
    doc.text('PRESUPUESTARIO',x+134,y+79.5);//2.1
    doc.setFontStyle('arial');
    doc.text(`${this.orden[0].uzftcertificate_CODIGO_PRESUP}`,x+134, y+90.5);
    doc.setFontType('bold');
    doc.text('DESCRIPCIÓN DEL ITEM',x+160,y+77.5);//4
    doc.text('PRESPUESTARIO',x+165,y+79.5);//4.1
    doc.setFontStyle('arial');
    doc.text(`${this.orden[0].uzftcertificate_DESCRIPCIONPRE}`,x+160, y+90.5);
    doc.setFontType('bold');
    doc.text('VALOR',x+199, y+77.5);//3
    doc.text('CERTIFICACIÓN',x+195,y+79.5);//3.1
    doc.setFontStyle('arial');
    doc.text(`${this.orden[0].uzftcertificate_VALOR}`,x+195, y+86.5);
    doc.text(`${this.orden[0].uzftcertificate_OTRO_VALOR}`,x+195, y+96.5);
    doc.setFontType('bold');
    doc.text('GASTO  A ',x+220,y+77.5);//5
    doc.text('EFECTUAR',x+220,y+79.5);//5.1
    doc.setFontStyle('arial');
    doc.text(`${this.orden[0].uzftcertificate_GASTO_AFECTUAR}`,x+220, y+86.5);
    doc.text(`${this.orden[0].uzftcertificate_OTRO_GASTOAFEC}`,x+220, y+96.5);
    doc.setFontType('bold');
    doc.text('SALDO',x+240,y+77.5);
    doc.setFontStyle('arial');
    doc.text('0',x+240, y+86.5);
    doc.text('0',x+240, y+96.5);
    


    //MODAL SECCION 6- FIRMAS DE RESPONSABILIDAD
    doc.text('______________________________________________________________________________________________________________________________________________________________________________________________________________________________  ___',x,y+114);
    doc.setFontSize(9);
    doc.setFontStyle('arial');
    doc.setTextColor(0, 0, 0);
    doc.text('SECCIÓN VI - FIRMAS DE RESPONSABILIDAD',x, y+118);
    doc.setFontSize(7)
    doc.setFontStyle('arial')
    doc.setTextColor(0,0,0);
    doc.text('ADM,',x,y+120);
    doc.text(`${this.orden[0].uzftemployee_NOMBRE}`,x+10,y+120);


    //MODAL SECCIÓN DE LINES 
    doc.rect(x, y+65, 250, 35);//Rectangulo del contenido del informe del gasto

    //MODAL SECCIÓN LINES HORIZONTALES
    doc.line(18.8, 94,269, 94, null,); //Primera  
    doc.line(18.8 , 99, 269, 99, null,x+67, y+70); //Segunda 
    doc.line(18.8, 106.18,269,106.18,null,);//Tercera 
    doc.line(210, 115,269,115,null,);//Cuarta
    doc.line(18.8, 130, 155, 130, null);//Sexta
    doc.line(18.8, 134, 155, 134, null);//Quinta
    doc.line(234.5, 130, 255, 130,null);
    doc.line(234.5, 134, 255, 134,null);


    //MODAL SECCIÓN LINEAS VERTICALES
    doc.line(28.10, 99, 28.10, 124.9,null,); 
    doc.line(49, 99, 49, 124.9,null,);
    doc.line(68, 99, 68, 124.9,null,);
    doc.line(84, 99, 84, 124.9,null);
    doc.line(101, 99, 101, 124.9,null);
    doc.line(115, 99, 115, 124.9,null);
    doc.line(134, 99, 134, 124.9,null);
    doc.line(149, 99, 149, 124.9,null);
    doc.line(176, 99, 176, 124.9,null);
    doc.line(210, 99, 210, 124.9,null);
    doc.line(234.5, 99, 234.5, 124.9,null);
    doc.line(255, 99, 255, 124.9,null);
    

    //MODAL SECCION LINEAS VERTICALES PEQUEÑAS
    doc.line(28.10, 90, 28.10, 94,null,); 
    doc.line(49, 90, 49, 94,null,);
    doc.line(68, 90, 68, 94,null,);
    doc.line(84, 90, 84, 94,null);
    doc.line(101, 90, 101, 94,null);
    doc.line(115, 90, 115, 94,null);
    doc.line(134, 90, 134, 94,null);
    doc.line(149, 90, 149, 99,null);
    doc.line(176, 90, 176, 94,null);
    doc.line(210, 90, 210, 94,null);
    doc.line(234.5, 90, 234.5, 94,null);
    doc.line(255, 90, 255, 94,null);
    doc.line(18.8, 130, 18.8, 134,null);//MODAL TOTAL DE ORDENES
    doc.line(155, 130, 155, 134,null);
    doc.line(134, 130, 134, 134,null);
    doc.line(115, 130, 115, 134,null);
    doc.line(101, 130, 101, 134,null);
    doc.line(84, 130, 84, 134,null);
    doc.line(234.5, 130, 234.5, 134,null);
    doc.line(255, 130, 255, 134,null);


    // doc.line(55, )


    doc.save('Orden de gasto ' + `${this.orden[0].uzftcontrato_OBJETO_CONTRATA}` + ' del ' + `${this.orden[0].uzftorder_MES}` + '.pdf');
  }
}
