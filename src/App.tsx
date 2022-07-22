import { useEffect, useState } from "react";
import { fetchNewsData } from "./API/API";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { RanksData } from "./interfaces/API";

interface Props {
  fetchedRanksData: RanksData[];
}

function App() {
  const [ranksData, setRanksData] = useState<RanksData[]>([]);

  useEffect(() => {
    fetchNewsData(setRanksData);
    console.log(ranksData);
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <Content ranksData={ranksData} />
      <Footer />
    </div>
  );
}

export default App;
