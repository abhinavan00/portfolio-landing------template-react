import './TechStack.css'

export default function TechStack({techStack}) {

    const techStackEls = techStack.map(stack => {
        return <p>{stack}</p>
    })

    return (
        <section className='tech-stack'>
            <h2>Technical Proficiency</h2>
            <div>
                {techStackEls}
            </div>
        </section>
    )
}