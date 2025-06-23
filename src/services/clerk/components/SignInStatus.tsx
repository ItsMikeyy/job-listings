import { SignedIn as ClerkSignedIn, SignedOut as ClerkSignedOut } from "@clerk/nextjs";
import { Suspense } from "react";

export const SignedOut = ({children}: {children: React.ReactNode}) => {
    return (
        <Suspense>
            <ClerkSignedOut>
                {children}
            </ClerkSignedOut>
        </Suspense>
    );
}

export const SignedIn = ({children}: {children: React.ReactNode}) => {
    return (
        <Suspense>
            <ClerkSignedIn>
                {children}
            </ClerkSignedIn>
        </Suspense>
    );
}