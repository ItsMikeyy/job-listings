import { useEffect, useState } from "react"

export const useIsDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches)
        
        const controller = new AbortController()
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        
        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches)
        }
        
        mediaQuery.addEventListener("change", handleChange, { signal: controller.signal })
        
        return () => {
            controller.abort()
        }
    }, [])

    // Return false during SSR and initial render to prevent hydration mismatch
    return mounted ? isDarkMode : false
}