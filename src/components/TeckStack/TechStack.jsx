import './TechStack.css'

export default function TechStack() {
    const techStackArr = [
        'html5', 'css3', 'javascript', 'typescript', 'react', 'next.js', 'node.js', 'express.js', 'ai engineering', 'python', 'docker'
    ]

    const techStackEls = techStackArr.map(stack => {
        return <p>{stack}</p>
    })

    return (
        <section>
            <h2>Technical Proficiency</h2>
            <div>
                {techStackEls}
            </div>
        </section>
    )
}