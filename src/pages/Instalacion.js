import React from 'react'
import Header from '../components/Header'
import MainBanner from '../components/Home/MainBanner'
import Services from '../components/Home/Services'
import Consult from '../components/Home/Consult'
import Footer from '../components/Footer'

export default function Instalacion() {
  let array=[
    {
      img1200: "/banners/banner2-desktop.webp",
      img1100: "/banners/banner2-desktop-1100x619.webp",
      img480: "/banners/banner2-movil-480x720.webp",
      title: "Reparamos tus Ventanas de PVC, como Nuevas",
      subtitle: "Resuelve tus problemas de sellado, o ajustes con nuestra experiencia garantizada.",
      callToAction: "Solicite una reparación hoy mismo",
      link: "/#consultas"
    }
  ]
  let array1=[
    {
      icon: "/servicios/settings-gears-removebg-preview.webp",
      title: "Cambio de mecanismos",
      description: "Sustituimos mecanismos desgastados para restaurar el funcionamiento óptimo de tus ventanas."
    },
    {
      icon: "/servicios/hinge-removebg-preview.webp",
      title: "Reparacion de bisagras",
      description: "Ajustamos o reemplazamos bisagras dañadas para garantizar una apertura y cierre suaves."
    },
    {
      icon: "/servicios/waterproof-removebg-preview.webp",
      title: "Sellado de ventanas",
      description: "Reforzamos el sellado para mejorar la eficiencia energética y evitar filtraciones."
    },
    {
      icon: "/servicios/tool-removebg-preview.webp",
      title: "Mantenimiento",
      description: "Servicio integral para mantener tus ventanas en perfectas condiciones."
    },
    {
      icon: "/servicios/window-removebg-preview.webp",
      title: "Sustitucion de vidrios",
      description: "Cambiamos vidrios rotos o antiguos por nuevas opciones seguras y eficientes."
    },
    {
      icon: "/servicios/caster-removebg-preview.webp",
      title: "Cambio de ruedas",
      description: "Reemplazamos ruedas desgastadas para un deslizamiento fluido en ventanas corredizas."
    },
  ]
  return (
    <>
      <Header />
      <MainBanner array={array} />
      <Services array={array1} />
      <Consult array={array1} />
      <Footer array={array1} />
    </>
  )
}
