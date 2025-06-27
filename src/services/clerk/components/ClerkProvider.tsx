"use client"
import { ClerkProvider as OriginalClerkProvider } from "@clerk/nextjs";
import { ReactNode, Suspense } from "react";
import {dark} from "@clerk/themes"
import { useIsDarkMode } from "@/hooks/useIsDarkMode";

export const ClerkProvider = ({children} : {children: ReactNode}) => {
    const isDarkMode = useIsDarkMode()

    return(
        <Suspense fallback={null}>
            <OriginalClerkProvider 
                appearance={isDarkMode ? {baseTheme: [dark]} : undefined}
            >
                {children}
            </OriginalClerkProvider>
        </Suspense>
    )
}