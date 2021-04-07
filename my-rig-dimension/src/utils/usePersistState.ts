import {useState, useEffect} from 'react'

export default function usePersistState(key: string, initialState: any){

    const [themeState, setThemeState] = useState(() => {
        const storageTheme = localStorage.getItem(key)
        if(storageTheme){
            return JSON.parse(storageTheme)
        }else{
            return initialState
        }
    })

    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(themeState))
    }, [setThemeState, themeState])

    return [themeState, setThemeState]

}