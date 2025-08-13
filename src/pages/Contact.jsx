function Contact() {
  return (
    <div className="w-full h-full fixed top-0 left-0 flex flex-col items-center justify-center bg-[var(--backdrop)] text-[var(--accent)] px-6 overflow-hidden">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <div className="flex flex-col gap-6 text-center">
        <a
          href="https://github.com/MJEGarcia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 hover:text-[#00bfff] transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.02c-3.19.69-3.87-1.53-3.87-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.68 1.23 3.33.94.1-.73.4-1.23.73-1.52-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.57.23 2.73.12 3.02.73.8 1.17 1.82 1.17 3.08 0 4.43-2.69 5.41-5.24 5.69.41.36.77 1.08.77 2.18v3.23c0 .31.21.66.79.55C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
          </svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/michael-james-garcia-60a299221/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 hover:text-[#00bfff] transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.033-1.849-3.033-1.849 0-2.131 1.445-2.131 2.939v5.663h-3.554V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.368-1.849 3.602 0 4.27 2.37 4.27 5.456v6.284zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.066 0-1.143.924-2.068 2.068-2.068 1.143 0 2.066.925 2.066 2.068 0 1.14-.923 2.066-2.066 2.066zm1.777 13.019H3.561V9h3.553v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.205 24 24 23.225 24 22.271V1.729C24 .774 23.205 0 22.225 0z" />
          </svg>
          LinkedIn
        </a>
        <a
          href="mailto:michaeljamesgarcia.dev@gmail.com"
          className="flex items-center justify-center gap-2 hover:text-[#00bfff] transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path d="M12 12.713l-11.99-7.713v14h23.98v-14l-11.99 7.713zm0-2.713l11.99-7.713h-23.98l11.99 7.713z" />
          </svg>
          michaeljamesgarcia.dev@gmail.com
        </a>
        <p>Phone: +63 917 150 7345</p>
      </div>
    </div>
  );
}

export default Contact;
