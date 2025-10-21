'use client'
import {createGlobalStyle} from "styled-components"

export const cores = {

}

export const breakpoints = {
    desktop: '1024px',
    tablet: '768px'
}

const GlobalCss = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Raleway", sans-serif;
        text-decoration: none;
    }
`

export default GlobalCss