const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground pt-16">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Software Engineer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            A passionate software engineer specializing in full-stack development with expertise in React, Node.js, and cloud technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;