import {useGlobalContext} from "./context"

const Home = () => {
    const {
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
    } = useGlobalContext()
    if (!isModalOpen && !isSidebarOpen) {
        return (
            <div className="home-container">
                <button
                    className="btn home-btn"
                    type="button"
                    onClick={openModal}>
                    Open Modal
                </button>

                <button className="btn" type="button" onClick={openSidebar}>
                    Open Sidebar
                </button>
            </div>
        )
    } else {
        return
    }
}
export default Home
