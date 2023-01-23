Setup
    npx create-react-app react-store
        npm i sass      npm i react-router-dom      npm i firebase

    npm start          

Google fonts
    https://fonts.google.com/       https://fonts.google.com/specimen/Open+Sans?category=Sans+Serif

    generate on google site ->  copy href to public/index.html<head> -> update src/index.css/scss ->  inspect the change

react-router-dom  vs NextJS nav
    next
        /pages/_app.js
            <Layout>
                <Component {...pageProps} />
            <MainNav>
                <div>
                    <Link href='/'>LOGO</Link>
                    <ul>
                        <li>
                            <Link href='/'>Home</Link>

    react-router-dom
        App
            <Routes>
                <Route path='/' element={<Nav />} >
                    <Route path='home' element={<Home />} />
                    <Route path='toys' element={<Toys />} />
    
        <Nav>
            <div>
                <Link to='/home'>
                    <div>LOGO</div>

Firebase
    https://console.firebase.google.com/?pli=1

    create clothing-db project

        Project Overview
            Build
                Authentication
                Firestore Database

.
.
.   >   More tools >    Rendering   > Paint flashing


Conditional within map within map
    {
        Object.keys(categoriesMap).map((title, i) => (
            <>
                <h2>{title}</h2>
                <div className='products'>
                    {
                        categoriesMap[title].map((p, i) => (
                            <li key={i}>
                                {i < 4 && <Product product={p}  />}
                            </li>
                        ))
                    }
                </div>
            </>
        ) )
    }   










Resources
    https://zerotomastery.io/
    https://www.youtube.com/@ZeroToMastery/videos
    https://zerotomastery.io/blog/?tag=MustRead&utm_source=mailerlite&utm_medium=email&utm_campaign=warm_welcome&utm_term=2023-01-08#recent


