import DeveloperProfile from '../../assets/Developer-Profile.png'
import './HeroSection.css'

export default function HeroSection() {
    return (
        <>
            <section className='hero-section'>
                <div className='hero-section-details'>
                    <h1> Building the future of web experiences </h1>
                    <p>
                        Full-stack developer specializing in scalable architecture, high-
                        performance interfaces, and AI integration. Crafting precise
                        solutions for complex problems.
                    </p>
                    <div className='hero-section-btns-container'>
                        <button className='hire-me-btn'>Hire Me</button>
                        <button className='view-project-btn'>View Projects</button>
                    </div>
                </div>
                <div className='img-container'>
                    <img src={DeveloperProfile} alt='Profile Image of Developer' />
                    <div className='img-overlay'></div>
                </div>
            </section>
        </>
    )
}