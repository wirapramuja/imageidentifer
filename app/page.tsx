import Header from "@/components/header";
import MainContainer from "@/components/main-container";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header section */}
      <Header />

      {/* Main container */}
      <MainContainer />
    </div>
  );
}
