# Currency Converter Mini App

This repository contains a tiny HTML app for converting Chinese RMB (CNY) to other currencies. The rates are fetched from [exchangerate.host](https://exchangerate.host/). To run it, simply open `index.html` in a modern web browser.

## Running

1. Ensure you have an active internet connection. The app fetches live exchange rates from the internet.
2. Open `index.html` directly in your browser (double-click or drag the file into the browser window).
3. Enter an amount in RMB, choose the target currency, and click **Convert** to see the result.

If the app cannot reach the online API, it falls back to a few built-in rates. These may be outdated, but they allow basic conversion while offline.

## Limitations

- The environment used for testing this repository does not have internet access, so automated tests will fail to retrieve exchange rates. The app requires internet access when you use it locally.
