//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { sequelize, Country } = require("./src/db.js");

const seedDatabase = async () => {
  // check if database has been seeded, and bail if it has been
  const countryCount = await Country.count();
  if (countryCount > 0) return;

  console.log("Fetching country data from API...");
  const response = await fetch("https://restcountries.com/v3/all");
  if (!response.ok) throw new Error("failed to fetch from countries API");
  const countryData = await response.json();
  const rows = countryData.map((country) => ({
    id: country.cca3,
    name: country.name.common,
    flagUrl: country.flags[0],
    continent: country.continents[0],
    capital: country.capital?.[0],
    subregion: country.subregion,
    area: country.area,
    population: country.population,
  }));

  console.log("Seeding database...");
  await Country.bulkCreate(rows);
};

const startServer = () => {
  server.listen(3001, () => {
    console.log("Server listening at port 3001.");
  });
};

// Syncing all the models at once.
sequelize.sync({ force: true }).then(seedDatabase).then(startServer);
