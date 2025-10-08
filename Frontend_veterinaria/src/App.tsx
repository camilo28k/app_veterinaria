// src/App.tsx (Código completo con la nueva pestaña y ruta de Productos)

import { Redirect, Route } from 'react-router-dom';
import { 
    IonApp, IonRouterOutlet, setupIonicReact, IonTabs, 
    IonTabBar, IonTabButton, IonIcon, IonLabel 
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// 🛑 Importar los íconos de la barra de pestañas (Usuarios, Mascotas, y Productos)
import { people, paw, basket } from 'ionicons/icons'; // Importamos 'basket' para Productos

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
// ... (rest of CSS imports)
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Importación de las páginas de USUARIOS
import UserList from './pages/User/UserList';
import CreatePage from './pages/User/CreatePage';
import DetailPage from './pages/User/DetailPage';
import EditPage from './pages/User/EditPage';

// Importación de las páginas de MASCOTAS
import PetsPage from './pages/Pet/PetsPage';
import CreatePetPage from './pages/Pet/CreatePetPage';
import PetDetailPage from './pages/Pet/PetDetailPage';
import EditPetPage from './pages/Pet/EditPetPage';

// Importación de las páginas de TIPOS DE MASCOTAS
import PetTypesPage from './pages/TypePet/PetTypePage';
import CreatePetTypePage from './pages/TypePet/CreatePetPage';
import EditTypePage from './pages/TypePet/EditTypePage';

// Importación de las páginas de PEDIDOS/PRODUCTOS
import ListPedidosPage from './pages/Orders/ListPedidosPage';
import CreateProductPage from './pages/Orders/CreateProductPage';
// 🛑 CLAVE: Importación de la nueva página de creación de producto



setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                
                <IonRouterOutlet>
                    
                    {/* 1. RUTAS DE USUARIOS */}
                    <Route path="/users" exact={true}>
                        <Redirect to="/users/list" />
                    </Route>
                    <Route exact path="/users/list" component={UserList} />
                    <Route exact path="/users/create" component={CreatePage} />
                    <Route exact path="/users/details/:id" component={DetailPage} />
                    <Route exact path="/users/edit/:id" component={EditPage} />

                    {/* 2. RUTAS DE MASCOTAS */}
                    <Route path="/pets" exact={true}>
                        <Redirect to="/pets/list" />
                    </Route>
                    <Route exact path="/pets/list" component={PetsPage} />
                    <Route exact path="/pets/create" component={CreatePetPage} />
                    <Route exact path="/pets/details/:id" component={PetDetailPage} />
                    <Route exact path="/pets/edit/:id" component={EditPetPage} />
                    
                    {/* RUTAS DE TIPOS DE MASCOTAS */}
                    <Route exact path="/pets/types" component={PetTypesPage} />
                    <Route exact path="/pets/types/create" component={CreatePetTypePage} />
                    <Route exact path="/pets/types/edit/:id" component={EditTypePage} /> 

                    {/* 🛑 3. RUTA DE PRODUCTOS/PEDIDOS */}
                    <Route path="/products" exact={true}>
                        <Redirect to="/products/list" />
                    </Route>
                    <Route exact path="/products/list" component={ListPedidosPage} />
                    {/* 🛑 NUEVA RUTA: Creación de Producto */}
                    <Route exact path="/products/create" component={CreateProductPage} /> 

                    {/* Redirección inicial */}
                    <Route exact path="/">
                        <Redirect to="/users/list" />
                    </Route>
                    
                </IonRouterOutlet>
                
                {/* 🛑 IonTabBar: La barra de menú inferior con la nueva pestaña */}
                <IonTabBar slot="bottom">
                    
                    {/* Botón de Usuarios */}
                    <IonTabButton tab="users" href="/users/list">
                        <IonIcon icon={people} />
                        <IonLabel>Usuarios</IonLabel>
                    </IonTabButton>
                    
                    {/* 🛑 Botón de Productos/Pedidos */}
                    <IonTabButton tab="products" href="/products/list">
                        <IonIcon icon={basket} />
                        <IonLabel>Productos</IonLabel>
                    </IonTabButton>
                    
                    {/* Botón de Mascotas */}
                    <IonTabButton tab="pets" href="/pets/list">
                        <IonIcon icon={paw} />
                        <IonLabel>Mascotas</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
