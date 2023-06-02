import Link from "./Link"
export default function Sidebar() {

    {/* <div>
        <Link to="/accordion">Accordion</Link>
        <Link to="/">Dropdown</Link> 
      </div> */}
    // instead 
    const linksData = [
        { label: 'Dropdown', to: '/' },
        { label: 'Accordion', to: '/accordion' },
        { label: 'Button', to: '/button' },
    ]

    const links = linksData.map(link => {
        return (
            <Link
                key={link.label}
                to={link.to}
                className={"linkDiv"}
                activeClass={"activeLink"}
            >{link.label}</Link>
        )
    })

    return (
        <div className="sidebar">
            {links}
        </div>
    )

}