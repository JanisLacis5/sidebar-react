import logo from "./logo.svg"
import {links, social} from "./data"
import {useGlobalContext} from "./context"
import {FaTimes} from "react-icons/fa"

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()
    if (isSidebarOpen) {
        return (
            <section className="sidebar-container">
                <div className="sidebar-header">
                    <img className="sidebar-logo" src={logo} alt="logo" />
                    <button
                        className="close-sidebar-btn"
                        type="button"
                        onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <div className="sidebar-main-container">
                    <div className="sidebar-main">
                        {links.map((link) => {
                            const {id, icon, url, text} = link
                            return (
                                <div
                                    key={id}
                                    className="sidebar-link-container">
                                    <i className="sidebar-link-icon">{icon}</i>
                                    <a href={url} className="link sidebar-link">
                                        {text}
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="sidebar-footer">
                    <div className="sidebar-footer-links">
                        {social.map((link) => {
                            const {id, url, icon} = link
                            return (
                                <a
                                    key={id}
                                    className="link social-link"
                                    href={url}>
                                    {icon}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    } else {
        return
    }
}
export default Sidebar
