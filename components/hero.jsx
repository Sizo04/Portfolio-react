import "../styles/hero.css"

const Hero = () => {
    return (
        <div className="container">
            <div className="text">
                <div className="headers">
                    <h1>Hello, I'm Aleksandar</h1>
                    <h1 className="h1color">Frontend developer</h1>
                </div>
                <p>Passionate Front-End Developer With experience in HTML, CSS, and JavaScript, I am a highly motivated and skilled front-end developer.
                    I am also experienced in Figma design, SaaS, Git, and GitHub version control.
                    I am also a strong problem solver and have a keen eye for detail.
                    I am eager to learn new technologies and am always looking for ways to improve my skills.
                    I am also a team player and am always willing to help others.
                    I am confident that I have the skills and experience necessary to be a successful front-end developer.</p>
                <a href="">Learn More</a>
                <p>
                    What i offer:
                    I can work on design. <br />
                    I can work on development. <br />
                    I have attention to detail. <br />
                    I’m flexible to travel if needed. <br />
                    I have great social skills. <br />
                    I’m responsilbe and reliable. <br />
                </p>
                <a href="">Check my skill</a>
                <div className="widgets"></div>
            </div>
            <div className="image"></div>
        </div>
    )
}

export default Hero;