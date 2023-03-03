import { useRef } from "react";
import Header from "./components/Header";
import BackToTop from "./components/BackToTop";
import usePresence from "./hooks/usePresence";


function App() {
  const ref = useRef(null);
  const headerIsVisible = usePresence(ref, {threshold: 0.5});

  const handleClick = () => {
    if(ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        
    };
  }

  return (
    <div>
      <Header ref={ref} />
      <BackToTop isVisible={!headerIsVisible} onClick={handleClick}  />
      <main className="min-h-[102vh]" />
    </div>
  )
}

export default App
