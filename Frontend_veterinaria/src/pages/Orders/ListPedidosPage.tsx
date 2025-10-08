// src/pages/Orders/ListPedidosPage.tsx (Código con la corrección en handleCreateProduct)

import React, { useState } from 'react';
import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonButton, IonIcon, IonList, useIonViewWillEnter, 
    IonSpinner, IonSearchbar 
} from '@ionic/react';
import { useHistory } from 'react-router-dom'; // 🛑 NECESARIO: useHistory para navegar
import { add, menu } from 'ionicons/icons'; 
import { getProducts, Product } from '../../Services/Product.service';
import { CardComponent } from '../../components/Card.Component';


const ListPedidosPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory(); // 🛑 Obtenemos el objeto history para la navegación

    // ... (loadProducts, useIonViewWillEnter, filteredProducts, etc.) ...
    const loadProducts = () => {
        setIsLoading(true);
        try {
            const list = getProducts();
            setProducts(list);
        } catch (error) {
            console.error("Error al cargar productos:", error);
            setProducts([]);
        } finally {
            setIsLoading(false);
        }
    };

    useIonViewWillEnter(() => {
        loadProducts();
    });

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.category.toLowerCase().includes(searchText.toLowerCase())
    );

    // 🛑 CORRECCIÓN CLAVE: Función para manejar el clic del botón Crear
    const handleCreateProduct = () => {
        // En lugar de un alert, navegamos a la ruta de creación de producto
        history.push('/products/create'); 
    };
    
    // ... (handleDetailsClick y handleEditClick) ...
    const handleDetailsClick = (productId: string) => {
        alert(`Ver detalles del Producto ID: ${productId}`); 
    };
    
    const handleEditClick = (productId: string) => {
        alert(`Editar Producto ID: ${productId}`); 
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    {/* Botón de Menú lateral */}
                    <IonButtons slot="start">
                        <IonButton color="primary">
                            <IonIcon slot="icon-only" icon={menu} />
                        </IonButton>
                    </IonButtons>
                    
                    <IonTitle>Lista de Productos</IonTitle>
                    
                    {/* Botón de Crear Producto (el signo más) */}
                    <IonButtons slot="end">
                        {/* 🛑 onClick llama a la función corregida */}
                        <IonButton color="success" onClick={handleCreateProduct}>
                            <IonIcon slot="icon-only" icon={add} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>

                {/* Barra de Búsqueda */}
                <IonToolbar>
                    <IonSearchbar 
                        value={searchText}
                        onIonChange={(e) => setSearchText(e.detail.value!)}
                        placeholder="Buscar productos" 
                        debounce={500}
                    />
                </IonToolbar>
            </IonHeader>
            
            <IonContent fullscreen>
                {/* ... (Contenido de la lista) ... */}
                {isLoading && (
                    <div className="ion-text-center ion-padding">
                        <IonSpinner name="dots" color="primary" />
                        <p>Cargando productos...</p>
                    </div>
                )}
                
                {!isLoading && (
                    <IonList>
                        {filteredProducts.map((product) => (
                            // Reutilización del CardComponent
                            <CardComponent
                                key={product.id}
                                itemId={product.id}
                                title={product.name}
                                subtitle={product.category} 
                                note={`$${product.price.toFixed(2)}`} 
                                imageUrl={product.imageUrl}
                                
                                onDetailsClick={() => handleDetailsClick(product.id)}
                                onEditClick={() => handleEditClick(product.id)} 
                                
                                showDetailsButton={true} 
                                showEditButton={true} 
                            />
                        ))}
                    </IonList>
                )}

                {(!isLoading && filteredProducts.length === 0) && <p className="ion-padding ion-text-center">No se encontraron productos.</p>}
            </IonContent>
        </IonPage>
    );
};

export default ListPedidosPage;