import DeveloperProfile from '../../assets/Developer-Profile.png'
import './HeroSection.css'

export default function HeroSection() {
    return (
        <>
            <section>
                <div>
                    <h1> Building the future of web experiences </h1>
                    <p>
                        Full-stack developer specializing in scalable architecture, high-
                        performance interfaces, and AI integration. Crafting precise
                        solutions for complex problems.
                    </p>
                    <div>
                        <button>Hire Me</button>
                        <button>View Projects</button>
                    </div>
                </div>
                <img src={DeveloperProfile} alt='Profile Image of Developer' />
            </section>
        </>
    )
}