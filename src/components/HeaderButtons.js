import React from 'react'
import { ReactComponent as Burger } from "../assets/burger.svg"
import ActiveLink from './ActiveLink'

export default function HeaderButtons(props) {
    const { isWide, theme, toggleTheme, dropDown, setDropDown } = props
    const redirectToAstri = () => {
        // eslint-disable-next-line no-restricted-globals
        confirm('This will open a new page. Proceed?') &&
            window.open('https://www.prodastri.com', '_blank');

    }

    function makeButtons(className) {
        return <>
            {/* adding the classname and activeclass prop is optional, will default to "navLink" and "selected" */}
            <ActiveLink path='/' inner='Home' classname={className} activeclass='selected'></ActiveLink>
            <ActiveLink path='/projects' inner='Projects' classname={className}></ActiveLink>
            <button onClick={toggleTheme} className={className}>
                {theme === 'dark' ? "light theme" : "dark theme"}
            </button>
            <button className={className} onClick={redirectToAstri} >prodastri.com</button>
        </>
    }

    return (
        <div className='headerButtons'>


            {isWide ?
                makeButtons('headerBtn')
                :
                <Burger onClick={() => setDropDown(!dropDown)}/>
            }

            {(dropDown && !isWide) && <div className='dropDown'>
                {makeButtons('dropDownBtn')}
            </div>}
        </div>)
}

// const styles = StyleSheet.create({})