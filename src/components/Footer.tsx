export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-lg mb-6">
            Made with ❤️ by{' '}
            <a
              href="https://github.com/eswar-7116"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors font-medium"
            >
              Eswar Dudi
            </a>
          </p>

          <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
            <a
              href="https://github.com/eswar-7116/altertone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium text-slate-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                   className="lucide lucide-github-icon lucide-github">
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 px-5 py-2 bg-sky-600 rounded-lg hover:bg-sky-500 transition-colors text-sm font-medium text-white"
            >
              Chrome Extension
            </a>
          </div>
        </div>

        <div className="text-center mt-10 pt-8 border-t border-slate-700/50 text-slate-400 text-sm">
          © {new Date().getFullYear()} AlterTone. All rights reserved.
        </div>
      </div>
    </footer>
  )
}