import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = "Zackery Martinez's Zany Mongoose | ITIS3135 | Home";
    }, []);

    return (
        <main>
            <h2>Home</h2>

            <figure>
                <img
                    src={`${import.meta.env.BASE_URL}images/zack-introduction.jpg`}
                    alt="Zackery Martinez"
                />
                <figcaption><em>Chopped Liver</em></figcaption>
            </figure>

            <p>
                Welcome to my ITIS 3135 course website.
            </p>

            <p>
                This site contains my coursework and assignments for
                Front-End Web App Development.
            </p>
        </main>
    );
}

export default Home;