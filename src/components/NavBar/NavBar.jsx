import './NavBar.css'

export default function NavBar() {
    return (
        <>
            <div className='navbar'>
                <p>DevPrecise</p>
                <div className='navlinks'>
                    <a href='#'>Home</a>
                    <a href='#'>Projects</a>
                    <a href='#'>Skills</a>
                    <a href='#'>Contacts</a>
                </div>
                <button>Hire Me</button>
            </div>
        </>
    )
}