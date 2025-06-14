export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-[#00DBD8] py-8 mt-12 relative">
      {/* Red background element */}
      <div className="absolute top-0 right-0 w-32 h-full"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-mono mb-4 md:mb-0 relative z-10">
            &copy; {currentYear} SZWAGERY. ALL RIGHTS RESERVED.
          </div>

          <div className="flex space-x-6 text-sm text-muted-foreground relative z-10">
            {/* <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary">
              Terms of Service
            </a> */}
            <a href="#home" className="hover:text-primary">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
