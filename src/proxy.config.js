const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "flightAvailability"
    ],
    target: "https://localhost:7254",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
