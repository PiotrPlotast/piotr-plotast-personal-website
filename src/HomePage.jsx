import FluidGlass from "./FluidGlass";

export default function HomePage() {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <FluidGlass
        mode="lens"
        lensProps={{
          scale: 0.25,
          ior: 1.15,
          thickness: 5,
          chromaticAberration: 0.1,
          anisotropy: 0.01,
        }}
      />
    </div>
  );
}
