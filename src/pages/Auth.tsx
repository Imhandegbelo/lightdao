const wallets = [
  {
    icon: "/icons/phantom.svg",
    name: "Phantom",
  },
  {
    icon: "/icons/coinbase.svg",
    name: "Phantom",
  },
];

export const Auth = () => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block w-full bg-[url(/images/registerbg.webp)] bg-cover bg-center" />
      <div className="w-full flex items-center justify-center px-6">
        <div className="text-center space-y-8">
          <h1 className="logo text-4xl md:text-5xl text-primary">LightDAO</h1>
          <div className="space-y-2">
            <h2 className="text">CONNECT YOUR WALLET</h2>
            <p className="text-gray-600 text-sm max-w-[343px] mx-auto">
              Choose one of available wallet providers or create a new wallet.
              What is a wallet?
            </p>
          </div>
          <div className="border-b border-gray-200">
            <button className="flex gap-2 border-b-3 items-center py-3 font-bold text-sm cursor-pointer">
              <img src="/icons/solana.svg" alt="solana" />
              <span>Solana</span>
            </button>
          </div>

          <div className="space-y-2">
            {wallets.map((wallet) => (
              <button
                key={wallet.name}
                className="w-full py-3 flex items-center justify-center gap-2 rounded-full border border-gray-200 font-bold text-sm text-gray-600 hover:bg-gray-200 cursor-pointer"
              >
                <img src={wallet.icon} alt={wallet.name} />
                <span>{wallet.name} Wallet</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
