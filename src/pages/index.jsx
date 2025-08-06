import Head from 'next/head'

// Components
import Header from '../components/Header'
import HeroImage from '../components/HeroImage'
import SiteIntro from '../components/Intro'
import Carousel from '../components/Carousel'
import TextBreak from '../components/TextBreak'
import Harlequin from '../components/Harlequin'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      {/* Page metadata */}
      <Head>
        <title>Miracle Café</title>
        <meta name="description" content="A cozy café in Kew East serving good coffee, good vibes, and a unique thrift experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Miracle Café" />
        <meta property="og:description" content="Your local community café and thrift experience in Kew East." />
        <meta property="og:image" content="/site_images/og-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Main layout */}
      <div className="min-h-screen bg-white text-black font-kopik">
        <Header />
        <HeroImage />
        <SiteIntro />
        <Carousel />
        <TextBreak />
        <Harlequin />
        <Footer />
      </div>
    </>
  )
}
