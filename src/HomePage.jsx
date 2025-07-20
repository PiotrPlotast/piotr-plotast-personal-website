import FluidGlass from "./FluidGlass";

export default function HomePage() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <FluidGlass
        mode="lens"
        lensProps={{
          scale: 0.25,
          ior: 1.15,
          thickness: 3,
          chromaticAberration: 0.05,
          anisotropy: 0.1,
        }}
      />
    </div>
  );
}
