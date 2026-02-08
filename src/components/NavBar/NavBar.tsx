import { AppBar, Toolbar, Container } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      className="bg-black/70 backdrop-blur border-b border-white/10"
    >
      <Container maxWidth="lg">
        <Toolbar className="flex justify-between h-16 px-0">
          {/* Logo */}
          <a href="#home" className="text-white font-bold text-lg">
            pylon
          </a>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#purpose"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Why Aone
            </a>
            <a
              href="#process"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Process
            </a>
            <a
              href="#media"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </a>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
