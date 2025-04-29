import Commoncard from "../components/Commoncard";

const symbols = [
  "ONGC",
  "TATASTEEL",
  "RELIANCE",
  "GAIL",
  "BPCL",
  "IOC",
  "TCS",
  "INFY",
  "HINDUNILVR",
  "HINDALCO",
  "TATAMOTORS",
  "HDFCBANK",
  "IREDA",
  "HDFCLIFE",
  "HDFC",
  "ICICIBANK",
  "INDUSINDBK",
  "JSWSTEEL",
  "KOTAKBANK",
  "SBILIFE",
  "SBICARD",
  "SBIN",
];


const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Live Equity Prices
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {symbols.map((symbol) => (
          <Commoncard key={symbol} symbol={symbol} />
        ))}
      </div>
    </div>
  );
};

export default Home;
