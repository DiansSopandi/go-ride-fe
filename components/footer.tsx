export const Footer = () => {
    return(
        <footer className="w-full bg-muted py-6 text-center text-sm text-muted-foreground shadow-sm rounded-lg">
            &copy; {new Date().getFullYear()} GoRide App. All rights reserved.
        </footer>
    )
}