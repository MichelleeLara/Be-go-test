import { Bell, ChevronLeft } from "@/icons/Icons"
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"

// /**
//  * Header de la aplicación.
//  *
//  * @param {{ title: string }} props - Propiedades del componente
//  * @returns {JSX.Element}
//  */

export const Header = ({title}) => {
  const navigate = useNavigate()
    return (
      <header className="flex items-center justify-between">
          <div onClick={() =>{navigate(-1)}} className="flex basis-0 grow cursor-pointer">
          <ChevronLeft />
        </div>
        <h1 className="font-semibold">Cargo {title}</h1>
        <div className="flex basis-0 grow justify-end">
          <Bell />
        </div>
      </header>
    )
}

Header.propTypes = {
    /** Título que se mostrará en el header */
    title: PropTypes.string.isRequired,
  }