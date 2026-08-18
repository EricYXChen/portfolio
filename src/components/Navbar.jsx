
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";


const Navbar = ({navOpen}) => {

    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';

    }

    const activeCurrentLink = (event) => {
        event.preventDefault();
        lastActiveLink.current?.classList.remove('active');
        event.currentTarget.classList.add('active');
        lastActiveLink.current = event.currentTarget;
        
        activeBox.current.style.top = event.currentTarget.offsetTop + 'px';
        activeBox.current.style.left = event.currentTarget.offsetLeft + 'px';
        activeBox.current.style.width = event.currentTarget.offsetWidth + 'px';
        activeBox.current.style.height = event.currentTarget.offsetHeight + 'px';

        document.getElementById(event.currentTarget.dataset.section)?.scrollIntoView({
            behavior: 'smooth'
        });
    }


    useEffect(() => {
        initActiveBox();
        window.addEventListener('resize', initActiveBox);

        return () => window.removeEventListener('resize', initActiveBox);
    }, []);
    const navItems = [
        
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link'
        }
      ];
    
    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {
                navItems.map(({label, link, className, ref}, key) =>(
                    <a href ={link} className = {className} key = {key} ref = {ref} data-section={link.slice(1)} onClick ={activeCurrentLink}>
                        {label}
                    </a>
                ))
            }
            <div className = "active-box" ref = {activeBox}>
                    
            </div>
        </nav>
    )
}

Navbar.PropTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar
