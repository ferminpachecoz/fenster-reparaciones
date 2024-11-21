import React from 'react'
import Header from '../components/Header'
import MainBanner from '../components/Home/MainBanner'
import Services from '../components/Home/Services'
import MVV from '../components/Home/MVV'
import Consult from '../components/Home/Consult'
import Blog from '../components/Home/Blog'
import Proyectos from '../components/Home/Proyectos'
import Footer from '../components/Footer'

export default function Home() {
  let array=[
    {
      icon: "bi bi-layout-text-window-reverse",
      title: "Oil change",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
    {
      icon: "bi bi-layout-text-window-reverse",
      title: "Tire Change",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
    {
      icon: "bi bi-layout-text-window-reverse",
      title: "Batteries",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
    {
      icon: "bi bi-layout-text-window-reverse",
      title: "Engine Repair",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
    {
      icon: "bi bi-layout-text-window-reverse",
      title: "Tow Truck",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
    {
      icon: "bi bi-layout-text-window-reverse",
      title: "Car Maintenance",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
    },
  ]
  return (
    <>
      <Header />
      <MainBanner />
      <Services array={array} />
      <MVV />
      <Consult array={array} />
      <Blog />
      <Proyectos />
      <Footer array={array} />
    </>
  )
}
