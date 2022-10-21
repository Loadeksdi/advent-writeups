export default function Footer() {
  return (
    <footer class="bg-darkbg flex h-20 mb-2 mx-10 gap-20 justify-center items-center text-white">
      <div>
        <a href="https://twitter.com/voidembracer99" target="_blank">
          <i class="fa-3x fab fa-twitter"></i>
        </a>
      </div>
      <div>
        <a href="https://github.com/Loadeksdi/advent" target="_blank">
          <i class="fa-3x fab fa-github"></i>
        </a>
      </div>
      <div>
        <a href="https://fresh.deno.dev">
          <img
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
      </div>
    </footer>
  );
}
