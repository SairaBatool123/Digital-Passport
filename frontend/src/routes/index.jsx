import { lazy } from 'react';
import { Navigate } from 'react-router';
import MainLayout from '@/layouts/MainLayout';
import EnvironmentalImpactCard from '../views/ecommerce/enviroment-impact/components/EnvironmentalImpactCard';

// Dashboards
const Dashboard = lazy(() => import('@/views/dashboards/dashboard'));

// Ecommerce
const ProductList = lazy(() => import('@/views/ecommerce/products'));
const AddProduct = lazy(() => import('@/views/ecommerce/add-product'));
const RawMaterialCard = lazy(() => import('@/views/ecommerce/raw-material'));
const Categories = lazy(() => import('@/views/ecommerce/categories'));
const JourneyCard = lazy(() => import('@/views/ecommerce/journey'))
const ManufacturerCard = lazy(() => import('@/views/ecommerce/manufacturer'))
const CertificateCard = lazy(() => import('@/views/ecommerce/certificate'))
const CareInstructionsCard = lazy(() => import('@/views/ecommerce/care-instructions'))

// Master Data
// const Certificate = lazy(() => import('@/views/masterData/components/certificate'))
// const Supplier = lazy(() => import('@/views/masterData/components/supplier'))
// const Product = lazy(() => import('@/views/masterData/components/product'))
// const Worldmap = lazy(() => import('@/views/masterData/components/Worldmap'))

const dashboardRoutes = [{
  path: '/dashboard',
  element: <Dashboard />
}];
const certificateRoutes = [
  {
    path: '/certificate-list',
    element: <CertificateCard />,
  },
]
// const masterRoutes = [
//   // {
//   //   path: 'master',
//   //   element: <masterData />,
//   // },
//   {
//     path: '/masterData/Certificate',
//     element: <Certificate />,
//   },
//   {
//     path: '/masterData/Supplier',
//     element: <Supplier />,
//   },
//   {
//     path: '/masterData/Product',
//     element: <Product />,
//   },
//   {
//     path: '/masterData/Map',
//     element: <Worldmap />,
//   },
// ]
const ecommerceRoutes = [
  {
    path: '/products',
    element: <ProductList />,
  },
  {
    path: '/add-product',
    element: <AddProduct />,
  },
  {
    path: '/categories',
    element: <Categories />,
  },
  {
    path: '/manufacturer-list',
    element: <ManufacturerCard />,
  },
  {
    path: '/journey-list',
    element: <JourneyCard />,
  },

  {
    path: '/care-instructions',
    element: <CareInstructionsCard />,
  },
  {
    path: '/enviroment-impact',
    element: <EnvironmentalImpactCard />,
  },
  {
    path: '/raw-material',
    element: <RawMaterialCard />,
  },
]

const allRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
      },
      ...dashboardRoutes,
      ...ecommerceRoutes,
      ...certificateRoutes,
    ],
  },
]
export const routes = [...allRoutes];