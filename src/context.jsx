import {createContext, useContext, useState} from "react"

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const openSidebar = () => setIsSidebarOpen(true)
    const closeModal = () => setIsModalOpen(false)
    const closeSidebar = () => setIsSidebarOpen(false)
    return (
        <GlobalContext.Provider
            value={{
                isModalOpen,
                isSidebarOpen,
                openModal,
                openSidebar,
                closeModal,
                closeSidebar,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default AppContext
