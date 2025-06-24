import { Button } from "@/components/ui/button"
import { 
    SignOutButton as ClerkSignOutButton,
    SignInButton as ClerkSignInButton,
    SignUpButton as ClerkSignUpButton,
 } from "@clerk/nextjs"
import { ComponentProps } from "react"

export const SignUpButton = ({children = <Button>Sign Up</Button>, ...props}: ComponentProps<typeof ClerkSignUpButton>) => {
    return <ClerkSignUpButton {...props}>{children}</ClerkSignUpButton>
} 
export const SignInButton = ({children = <Button>Sign In</Button>, ...props}: ComponentProps<typeof ClerkSignInButton>) => {
    return <ClerkSignInButton {...props}>{children}</ClerkSignInButton>
} 
export const SignOutButton = ({children = <Button>Sign Out</Button>, ...props}: ComponentProps<typeof ClerkSignOutButton>) => {
    return <ClerkSignOutButton {...props}>{children}</ClerkSignOutButton>
} 