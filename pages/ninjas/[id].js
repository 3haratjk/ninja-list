import Head from 'next/head'
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return { params: { id: ninja.id.toString() } }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}
const Details = ({ ninja }) => {
    return (
        <>
            <Head>
                <title>Ninja Details | Ninja List</title>
            </Head>
            <main>
                <h1>{ninja.name}</h1>
                <p>email: {ninja.email}</p>
                <p>website: {ninja.website}</p>
                <p>city: {ninja.address.city}</p>
            </main>
        </>
    );
}

export default Details;