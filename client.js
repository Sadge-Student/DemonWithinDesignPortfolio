// client.js
const sanityClient = require("@sanity/client");

module.exports = sanityClient({
  projectId: "cosdlytw",
  dataset: "production",
  useCdn: true,
});
