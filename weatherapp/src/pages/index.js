import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CurrentWeather from '@/components/currentWeather'
const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return <CurrentWeather />
}
