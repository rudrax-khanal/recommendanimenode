import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = (props) => {
    return(
        <div>
        <Head>
            <title>RecommendAnime</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <div class="main">
            <Header />
            <div className="content-holder">
                {props.children}
            </div>
            <Footer />
        </div>
        </div>
    )
}

export default Layout