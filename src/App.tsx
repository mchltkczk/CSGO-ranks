import { useEffect, useState } from "react";
import { fetchNewsData } from "./API/API";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { RanksData } from "./interfaces/API";

function App() {
  const [ranksData, setRanksData] = useState<RanksData[]>([]);

  useEffect(() => {
    fetchNewsData(setRanksData);
    console.log(ranksData);
  }, []);
  if (ranksData.length === 0) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        Ładowanie...
      </div>
    );
  } else
    return (
      <div className='wrapper'>
        <Header />
        <Content ranksData={ranksData} />
        <Footer />
      </div>
    );
}

export default App;
