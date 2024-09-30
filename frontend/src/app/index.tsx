import { Routes, Route } from 'react-router-dom'
import { Footer } from '../components/ui/footer'
import { Header } from '../components/ui/header'
import { PrincipalPage } from '../pages/principal'
import { BillingPage } from '../pages/billing'
import { CartPage } from '../pages/cart'
import { ErrorPage } from '../pages/error'
import { LoginPage } from '../pages/login'
import { ProductPage } from '../pages/product'
import { RegisterPage } from '../pages/register'

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<PrincipalPage />} />
        <Route path='/billing' element={<BillingPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  )
}
