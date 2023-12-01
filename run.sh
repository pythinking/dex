pnpm i @orderly.network/react@internal @orderly.network/web3-onboard@internal
pnpm dev

pnpm i @web3-onboard/trezor @web3-onboard/walletconnect @web3-onboard/ledger @web3-onboard/injected-wallets

#编译：
docker build -t orderly-web-demo .
#运行：
docker run -p 3000:3000 orderly-web-demo