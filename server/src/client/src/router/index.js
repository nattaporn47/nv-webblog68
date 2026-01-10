import { createRouter, createWebHistory } from 'vue-router'
// --- Import Components ของ User (จากบทที่ 7) ---
import UserIndex from '../components/Users/Index.vue'  
// ... (UserCreate, UserEdit, UserShow) ...

// --- Import Components ของ Menu (สำหรับปฏิบัติการบทที่ 7) ---
import MenuIndex from '../components/Menus/Index.vue'
import MenuCreate from '../components/Menus/CreateMenu.vue'
import MenuEdit from '../components/Menus/EditMenu.vue'
import MenuShow from '../components/Menus/ShowMenu.vue'
  
const router = createRouter({  
  history: createWebHistory(import.meta.env.BASE_URL),  
  routes: [  
    // ... User Routes ...
    {  
      path: '/users',  
      name: 'users',  
      component: UserIndex  
    },
    // ... เส้นทางอื่น ๆ ของ User ...

    // --- Menu Routes ---
    {  
      path: '/menus',  
      name: 'menus',  
      component: MenuIndex  // หน้ารายการเมนู
    },  
    {  
      path: '/menu/create',  
      name: 'menu-create',  
      component: MenuCreate // หน้าสร้างเมนูใหม่
    },  
    {  
      path: '/menu/edit/:menuId', // กำหนดให้รับ Parameter :menuId สำหรับแก้ไข
      name: 'menu-edit',  
      component: MenuEdit  
    },  
    {  
      path: '/menu/:menuId', // กำหนดให้รับ Parameter :menuId สำหรับดูรายละเอียด
      name: 'menu-show',  
      component: MenuShow
    }  
  ]  
})  
  
export default router