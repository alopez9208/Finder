import { XMLParser } from 'fast-xml-parser';

export interface Order {
  id: string;
  guia: string;
  ciudad: string;
  direccion: string;
  cliente: string;
  telefono_cliente: string;
  tipo_de_pago: string;
  proveedor: string;
  tienda: string;
  productos: string;
  cantidad_total: string;
  estado: string;
  total: string;
  envio: string;
  fecha_creacion: string;
}

export interface OrdersResponse {
  orders: {
    order: Order[];
  };
}

export function parseOrdersXML(xmlData: string): Order[] {
  try {
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
    });

    const result = parser.parse(xmlData) as OrdersResponse;
    
    // Ensure we always return an array, even if there's only one order
    const orders = Array.isArray(result.orders.order) 
      ? result.orders.order 
      : [result.orders.order];

    return orders;
  } catch (error) {
    console.error('Error parsing XML:', error);
    return [];
  }
}

// Example usage:
/*
const xmlData = `<orders>...</orders>`;
const orders = parseOrdersXML(xmlData);
console.log(orders);
*/ 