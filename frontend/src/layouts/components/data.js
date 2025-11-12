import { TbApps, TbBasket, TbLayoutDashboard } from 'react-icons/tb';
import { LuShoppingBag, LuCircleGauge } from 'react-icons/lu'
export const menuItems = [
  {
    key: 'dashboards',
    label: 'Dashboards',
    icon: LuCircleGauge,
    url: '/dashboard',
  },
  {
    key: 'products',
    icon: LuShoppingBag,
    label: 'Products',
    children: [
      {
        key: 'add-product',
        label: 'Add Product',
        url: '/add-product',
      },
      {
        key: 'product-list',
        label: 'Product Listing',
        url: '/products',
      },
      {
        key: 'categories',
        label: 'Product Categories',
        url: '/categories',
      },
      {
        key: 'manufacturer',
        label: 'Manufacturer List',
        url: '/manufacturer-list',
      },
      {
        key: 'certificate',
        label: 'Certificate List',
        url: '/certificate-list',
      },
      {
        key: 'raw-material',
        label: 'Raw Materials List',
        url: '/raw-material',
      },
      {
        key: 'Journey',
        label: 'Product Journey List',
        url: '/journey-list',
      },
      {
        key: 'care-instruction',
        label: 'Care Instructions List',
        url: '/care-instructions',
      },
      {
        key: 'enviroment-impact',
        label: 'Enviromental Impact List',
        url: '/enviroment-impact',
      },
    ],
  },

  // {
  //   label: 'Data Set',
  //   url: '/masterData',
  //   key: 'master data',
  //   icon: LuDatabase,
  //   children: [
  //     {
  //       key: 'masterproduct',
  //       label: 'Product',
  //       url: '/masterData/Product',
  //     },
  //     {
  //       key: 'mastercertificate',
  //       label: 'Certificate',
  //       url: '/masterData/Certificate',
  //     },
  //     {
  //       key: 'mastersupplier',
  //       label: 'Supplier',
  //       url: '/masterData/Supplier',
  //     },
  //     {
  //       key: 'mastermap',
  //       label: 'Map',
  //       url: '/masterData/Map',
  //     },
  //   ],
  // },
]
export const horizontalMenuItems = [
  {
    key: 'dashboards',
    label: 'Dashboards',
    icon: TbLayoutDashboard,
    children: [
      {
        key: 'dashboard-v1',
        label: 'Dashboard',
        url: '/dashboard',
      },
    ],
  },
]