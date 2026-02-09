import { AppBar, Toolbar, Container } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          backdropFilter: "none",
        }}
      >
        <Container maxWidth="xl" className="bg-hero-cover min-h-screen ">
          <Toolbar className="flex justify-evenly items-center h-20 px-8 ">
            {/* Logo */}
            {/* <a
            href="#home"
            className="text-black font-medium text-base tracking-wide"
          >
            Pylon
          </a> */}

            {/* Navigation Links */}
            <nav className="flex items-center gap-12">
              <a
                href="#ds"
                className="relative   font-serif  text-sm font-normal text-black tracking-wide group"
              >
                +DS
                <span className="absolute   left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>{" "}
              </a>

              <a
                href="#think"
                className="relative  font-serif  text-sm font-normal text-black tracking-wide group"
              >
                THINK
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>{" "}
              </a>
              <a
                href="#insightify"
                className="relative text-sm  font-serif  font-normal text-black tracking-wide group"
              >
                INSIGHTIFY
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>{" "}
              </a>
              <a
                href="#media"
                className="relative text-sm  font-serif font-normal text-black tracking-wide group"
              >
                MEDIA MAGNET
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>{" "}
              </a>
              <a
                href="#tut"
                className="relative text-sm font-serif font-normal text-black tracking-wide group"
              >
                TUT GROUP
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>{" "}
              </a>
              <a
                href="#tact"
                className="relative text-sm font-serif font-normal text-black tracking-wide group"
              >
                TACT CONSTRUCTION
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>{" "}
              </a>
            </nav>

            {/* Black Line Accent */}
            <div className="w-48 h-1 bg-black"></div>

            <div className=" text-black flex    ">
            Lorem ipsum dolor sit amet
            </div>
          </Toolbar>

          <section className="flex-row justify-evenly items-center space-y-6  pt-4">
            <div className="text-black  bg-amber-950 w-1/2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quae, ullam rem debitis earum quam sit impedit
              blanditiis, architecto odit reprehenderit molestiae, velit
              incidunt maxime saepe modi ducimus cum repellat.
            </div>
            <div>
              <button className="bg-red-600">explore the group</button>
            </div>
          </section>

          <section>
            <div className=" flex text-9xl  pt-30  justify-center items-center">
              <h1 className="text-black  font-serif">Pylon Holding</h1>
            </div>
          </section>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
