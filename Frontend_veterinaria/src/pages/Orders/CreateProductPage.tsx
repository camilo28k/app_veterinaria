// src/pages/CreateProductPage.tsx

import React, { useState } from 'react';
import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonBackButton, IonToast, IonList, IonItem, 
    IonLabel, IonInput, IonTextarea, IonSelect, IonSelectOption, 
    IonButton
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { createProduct, Product } from '../../Services/Product.service';


// Definición de las categorías para el Select
const CATEGORY_OPTIONS = ['Alimento', 'Medicamento', 'Juguete', 'Cuidado', 'Accesorio'];

// Definición de la data inicial del formulario de producto
const initialProductFormState: Omit<Product, 'id'> = {
    name: '',
    category: CATEGORY_OPTIONS[0],
    description: '',
    price: 0,
    imageUrl: 'https://i.pravatar.cc/150',
};


const CreateProductPage: React.FC = () => {
    const history = useHistory();
    const [formData, setFormData] = useState<Omit<Product, 'id'>>(initialProductFormState);
    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState(false);
    
    // Función genérica para manejar los cambios de input/select
    const handleChange = (name: keyof Omit<Product, 'id'>, value: string | number | undefined | null) => {
        if (value !== null && value !== undefined) {
            setFormData((prevData) => ({
                ...prevData,
                [name]: name === 'price' ? parseFloat(value as string) : value,
            }));
        }
    };

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        
        // 🛑 Validación: Asegurar que los campos clave no estén vacíos
        if (!formData.name.trim() || !formData.category.trim() || !formData.description.trim() || formData.price <= 0) {
            alert('Por favor, complete Nombre, Categoría, Descripción y un Precio válido.');
            return;
        }

        setIsSaving(true);
        
        try {
            // Llama al servicio para crear el producto
            createProduct(formData); 
            
            setShowToast(true);
            
            // Redirigir a la lista de productos
            setTimeout(() => {
                history.replace('/products/list');
            }, 1000);

        } catch (error) {
            console.error('Error al crear el producto:', error);
            alert('Hubo un error al guardar el producto.');
            setIsSaving(false);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/products/list" /> 
                    </IonButtons>
                    <IonTitle>Crear Nuevo Producto</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                
                {/* 🛑 Formulario de Producto ADAPTADO */}
                <form onSubmit={handleCreate}>
                    <IonList lines="full">
                        
                        {/* Nombre del Producto */}
                        <IonItem>
                            <IonLabel position="stacked">Nombre <span style={{ color: 'red' }}>*</span></IonLabel>
                            <IonInput 
                                value={formData.name} 
                                placeholder="Ej: Alimento Premium" 
                                onIonChange={(e) => handleChange('name', e.detail.value)} 
                                required
                            />
                        </IonItem>
                        
                        {/* Categoría */}
                        <IonItem>
                            <IonLabel position="stacked">Categoría <span style={{ color: 'red' }}>*</span></IonLabel>
                            <IonSelect 
                                value={formData.category} 
                                placeholder="Seleccionar" 
                                onIonChange={(e) => handleChange('category', e.detail.value)} 
                                required
                            >
                                {CATEGORY_OPTIONS.map(cat => (
                                    <IonSelectOption key={cat} value={cat}>{cat}</IonSelectOption>
                                ))}
                            </IonSelect>
                        </IonItem>
                        
                        {/* Descripción */}
                        <IonItem>
                            <IonLabel position="stacked">Descripción <span style={{ color: 'red' }}>*</span></IonLabel>
                            <IonTextarea 
                                value={formData.description} 
                                placeholder="Descripción detallada del producto" 
                                onIonChange={(e) => handleChange('description', e.detail.value)} 
                                rows={3} 
                                required
                            />
                        </IonItem>
                        
                        {/* Precio */}
                        <IonItem>
                            <IonLabel position="stacked">Precio ($) <span style={{ color: 'red' }}>*</span></IonLabel>
                            <IonInput 
                                value={formData.price} 
                                placeholder="Ej: 19.99" 
                                onIonChange={(e) => handleChange('price', e.detail.value)} 
                                type="number" 
                                inputmode="decimal" 
                                required
                            />
                        </IonItem>
                        
                        {/* URL de Imagen (Opcional) */}
                        <IonItem>
                            <IonLabel position="stacked">URL de Imagen</IonLabel>
                            <IonInput 
                                value={formData.imageUrl} 
                                placeholder="https://..." 
                                onIonChange={(e) => handleChange('imageUrl', e.detail.value)} 
                            />
                        </IonItem>
                        
                    </IonList>

                    <div className="ion-padding">
                        <IonButton 
                            expand="block" 
                            type="submit" 
                            color="success" 
                            disabled={isSaving}
                        >
                            {isSaving ? "Guardando..." : "Guardar Producto"}
                        </IonButton>
                    </div>
                </form>

                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message="¡Producto creado con éxito!"
                    duration={1000}
                    color="success"
                />
            </IonContent>
        </IonPage>
    );
};

export default CreateProductPage;