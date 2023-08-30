import { Fragment } from 'react'
import Header from '@/app/components/Header/Header'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </Fragment>
  )
}
