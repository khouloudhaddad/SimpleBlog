import Layout from "../Layouts/Layout"

function Home({ name }){
    return (
        <>
            <h1 className="heading">Home Page</h1>
            <p className="text-center">Hello {name}</p>
        </>
    )
}

Home.layout = page => <Layout children={page} />

export default Home;
