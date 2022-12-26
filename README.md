Setup
    npx create-react-app react-store
        npm i sass      npm i react-router-dom

    npm start           npm start

Google fonts
    https://fonts.google.com/       https://fonts.google.com/specimen/Open+Sans?category=Sans+Serif

    generate ->  copy href to index.html.head -> update index.css/scss ->  inspect the change

react-router-dom  vs NextJS nav
    next
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




