import Header from '@/layout/header/header'
import Footer from '@/layout/footer/footer'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="h-screen container flex items-center">
        <img
          src="src\images\header\UNDERBRIDGE LOGO.png"
          className="w-2/6 rounded-full shadow-xl"
        ></img>
        <div className="flex flex-col ml-10 w-1/4">
          <p className="font-bold tracking-widest text-6xl my-2 text-red-500 uppercase">
            Underbridge
          </p>
          <p className="font-semibold tracking-tight text-xl my-2 uppercase">
            Магазин "Underbridge" - ваш идеальный выбор для модной и комфортной
            одежды. Мы предлагаем широкий ассортимент брендовой и дизайнерской
            одежды и аксессуаров по доступным ценам. У нас вы найдете все
            необходимое для создания своего уникального образа на каждый день.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}