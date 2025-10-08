// src/service/Product.service.ts

export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    imageUrl: string;
}

const PRODUCT_STORAGE_KEY = 'products_data';

// Datos de ejemplo simulados
const initialProducts: Product[] = [
    { id: 'p1', name: 'Alimento Premium para Perros', category: 'Alimento', description: 'Nutrición balanceada.', price: 25.99, imageUrl: 'https://i.pravatar.cc/150?img=20&u=p1' },
    { id: 'p2', name: 'Vacuna Multidosis para Gatos', category: 'Medicamento', description: 'Protección contra enfermedades.', price: 45.00, imageUrl: 'https://i.pravatar.cc/150?img=21&u=p2' },
    { id: 'p3', name: 'Juguete Interactivo para Aves', category: 'Juguete', description: 'Estimulación mental.', price: 12.50, imageUrl: 'https://i.pravatar.cc/150?img=22&u=p3' },
];

const saveProducts = (products: Product[]) => {
    localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(products));
};


export const getProducts = (): Product[] => {
    const data = localStorage.getItem(PRODUCT_STORAGE_KEY);
    if (data) {
        try {
            return JSON.parse(data);
        } catch (e) {
            console.error("Error parsing product data from localStorage:", e);
        }
    }
    
    saveProducts(initialProducts);
    return initialProducts;
};

/**
 * Crea un nuevo producto.
 */
export const createProduct = (newProductData: Omit<Product, 'id'>): Product => {
    const products = getProducts();
    
    const newProduct: Product = {
        id: Date.now().toString(),
        ...newProductData
    };
    
    products.push(newProduct);
    saveProducts(products); 
    return newProduct;
};

export const getProductById = (id: string): Product | undefined => {
    const products = getProducts();
    return products.find(p => p.id === id);
};