const calcMaxFit = (container, item) => {
  const arrangements = [
    [0, 1, 2],
    [0, 2, 1],
    [1, 0, 2],
    [1, 2, 0],
    [2, 0, 1],
    [2, 1, 0],
  ];

  const counts = [];
  for (let i in arrangements) {
    const fit = {};
    fit.description = `
        box     |objekt 
        ________|_______
        ${container[0]}     |${item[arrangements[i][0]]}
        ${container[1]}     |${item[arrangements[i][1]]}
        ${container[2]}     |${item[arrangements[i][2]]}
    `;
    fit.a = {};
    fit.a.calculation = `${container[0]} / ${
      item[arrangements[i][0]]
    } = ${Math.floor(container[0] / item[arrangements[i][0]])}, Rest: ${
      container[0] % item[arrangements[i][0]]
    }`;
    fit.a.value = Math.floor(container[0] / item[arrangements[i][0]]);
    fit.b = {};
    fit.b.calculation = `${container[1]} / ${
      item[arrangements[i][1]]
    } = ${Math.floor(container[1] / item[arrangements[i][1]])}, Rest: ${
      container[1] % item[arrangements[i][1]]
    }`;
    fit.b.value = Math.floor(container[1] / item[arrangements[i][1]]);
    fit.c = {};
    fit.c.calculation = `${container[2]} / ${
      item[arrangements[i][2]]
    } = ${Math.floor(container[2] / item[arrangements[i][2]])}, Rest: ${
      container[2] % item[arrangements[i][2]]
    }`;
    fit.c.value = Math.floor(container[2] / item[arrangements[i][2]]);
    fit.total = fit.a.value * fit.b.value * fit.c.value;
    counts.push(fit);
  }

  const max = counts.reduce((prev, current) =>
    prev.total > current.total ? prev : current
  );

  return { counts, max };
};

// const fits = calcMaxFit([544, 364, 242], [48, 48, 38]);
// console.log(
//   "________________________________\nLautsprecher:\n",
//   fits.max.descrtiption,
//   fits.max.total
// );
// const fits2 = calcMaxFit([544, 364, 242], [120, 115, 20]);
// console.log(
//   "________________________________\nHauptplatine:\n",
//   fits2.max.descrtiption,
//   fits2.max.total
// );
// const fits3 = calcMaxFit([544, 364, 242], [120, 40, 2]);
// console.log(
//   "________________________________\nBedienplatine:\n",
//   fits3.max.descrtiption,
//   fits3.max.total
// );
// const fits4 = calcMaxFit([544, 364, 242], [130, 126, 20]);
// console.log(
//   "________________________________\nSilikonhülle:\n",
//   fits4.max.descrtiption,
//   fits4.max.total
// );
// const fits5 = calcMaxFit([376, 265, 110], [120, 63, 1]);
// console.log(
//   "________________________________\nGitter:\n",
//   fits5.max.descrtiption,
//   fits5.max.total
// );

module.exports = calcMaxFit;

kltGross = [544, 364, 242];
kltKlein = [346, 265, 110];
kltExtraKlein = [243, 162, 129];
greifbehälter = [137, 63, 89];
glt = [1200, 800, 800];

const justify = (combinations) => {
  combinations.forEach((combination) => {
    const fits = calcMaxFit(combination.container, combination.item);
    console.log(
      `________________________________\n${combination.title}:\n`,
      fits.max.description,
      `maximaler Ihnhalt: ${fits.max.total}`,
      "\n\n"
    );
    combination.detail && console.log(fits);
  });
};

const combinations = [
  //   {
  //     title: "Lautsprecher - KLT-gross",
  //     container: kltGross,
  //     item: [48, 48, 38],
  //   },
  //   {
  //     title: "Lautsprecher - KLT-klein",
  //     container: kltKlein,
  //     item: [48, 48, 38],
  //   },
  //   {
  //     title: "Hauptplatine - KLT-gross",
  //     container: kltGross,
  //     item: [120, 115, 20],
  //   },
  //   {
  //     title: "Bedienplatine - KLT-gross",
  //     container: kltGross,
  //     item: [120, 40, 2],
  //   },
  //   {
  //     title: "Bedienplatine (mit Luft) - KLT-gross",
  //     container: kltGross,
  //     item: [120, 40, 5],
  //   },
  //   {
  //     title: "Bedienplatine - KLT-klein",
  //     container: kltKlein,
  //     item: [120, 40, 2],
  //   },
  //   {
  //     title: "Bedienplatine (mit Luft) - KLT-klein)",
  //     container: kltKlein,
  //     item: [120, 40, 5],
  //   },
  //   {
  //     title: "Bedienplatine (mit Luft) - KLT-extra-klein)",
  //     container: kltExtraKlein,
  //     item: [120, 40, 5],
  //   },
  //   {
  //     title: "Silikonhülle - KLT-gross",
  //     container: kltGross,
  //     item: [130, 126, 10],
  //   },
  //   {
  //     title: "Gitter - KLT-klein",
  //     container: kltKlein,
  //     item: [120, 63, 2],
  //   },
  //   {
  //     title: "Gitter - KLT-extra-klein",
  //     container: kltExtraKlein,
  //     item: [120, 63, 2],
  //   },
  //   {
  //     title: "Brücke",
  //     container: greifbehälter,
  //     item: [45, 20, 6],
  //   },
  //   {
  //     title: "Membran - Greifbehälter",
  //     container: greifbehälter,
  //     item: [85, 40, 5],
  //   },
  //   {
  //     title: "Membran (KLT-klein)",
  //     container: kltKlein,
  //     item: [85, 40, 5],
  //   },
  //   {
  //     title: "Membran (KLT-extra-klein)",
  //     container: kltExtraKlein,
  //     item: [85, 40, 5],
  //     detail: true,
  //   },
  //   {
  //     title: "Dichtung Bedienplatine",
  //     container: greifbehälter,
  //     item: [120, 5, 4],
  //   },
  //   {
  //     title: "Dichtung 1 Hauptplatine", TODO
  //     container: greifbehälter,
  //     item: [115, 20, 7],
  //   },
  //   {
  //     title: "Dichtung 2 Hauptplatine",
  //     container: greifbehälter,
  //     item: [116, 5, 6],
  //   },
  //   {
  //     title: "Schrauben",
  //     container: greifbehälter,
  //     item: [5, 5, 5],
  //   },
  //   {
  //     title: "Lichtleiter/Lichtbrücke",
  //     container: greifbehälter,
  //     item: [42, 2, 6],
  //   },
  //   {
  //     title: "Mikrostopfen",
  //     container: greifbehälter,
  //     item: [11, 11, 5],
  //   },
  //   {
  //     title: "Flachbandkabel",
  //     container: greifbehälter,
  //     item: [20, 12, 1],
  //   },
  //   {
  //     title: "Boden",
  //     container: kltKlein,
  //     item: [114, 40, 5],
  //   },
  //   {
  //     title: "Boden - KLT-extra-klein",
  //     container: kltExtraKlein,
  //     item: [114, 40, 5],
  //   },
  //   {
  //     title: "Akku - KLT-extra-klein",
  //     container: kltExtraKlein,
  //     item: [23, 23, 70],
  //   },
  //   {
  //     title: "Akku - KLT-klein",
  //     container: kltKlein,
  //     item: [23, 23, 70],
  //   },
  //   {
  //     title: "Gehäuse - GLT",
  //     container: glt,
  //     item: [124, 120, 38],
  //   },
  //   {
  //     title: "Gehäuse - KLT-gross",
  //     container: kltGross,
  //     item: [124, 120, 38],
  //   },
  //   {
  //     title: "Gehäuse - KLT-greifbehälter",
  //     container: greifbehälter,
  //     item: [124, 120, 38],
  //   },
  //   {
  //     title: "Verpackung, Schaumstoff - KLt-klein",
  //     container: kltKlein,
  //     item: [208, 140, 5],
  //   },
  //   {
  //     title: "Verpackung, Schaumstoff - KLt-gross",
  //     container: kltGross,
  //     item: [208, 140, 5],
  //   },
  //   {
  //     title: "Verpackung, Kabel - KLt-klein",
  //     container: kltKlein,
  //     item: [110, 28, 21],
  //   },
  //   {
  //     title: "Verpackung, Papier - KLt-gross",
  //     container: kltGross,
  //     item: [125, 125, 8],
  //   },
  //   {
  //     title: "Verpackung, Papier - KLt-extra-klein",
  //     container: kltExtraKlein,
  //     item: [125, 125, 8],
  //   },
  //   {
  //     title: "Verpackung, Papier - KLt-extra-klein",
  //     container: kltExtraKlein,
  //     item: [125, 125, 8],
  //   },
  //   {
  //     title: "Verpackung, Box ohne Hülle - KLt-gross",
  //     container: kltGross,
  //     item: [214, 207, 3],
  //   },
  // {
  //   title: "Verpackung, Box ohne Hülle - KLt-extra-klein",
  //   container: kltExtraKlein,
  //   item: [125, 125, 8],
  // },
  //   {
  //     title: "Verpackung, Box mit Hülle - GLT",
  //     container: glt,
  //     item: [214, 150, 65],
  //   },
  //   {
  //     title: "Verpackung, Box innenleben- GLT",
  //     container: glt,
  //     item: [212, 148, 62],
  //   },
  // {
  //   title: "Dichtung 1 Hauptplatine - Greifbehälter",
  //   container: greifbehälter,
  //   item: [115, 20, 7],
  // },
  // {
  //   title: "Dichtung 1 Hauptplatine - KLT-extra-klein",
  //   container: kltExtraKlein,
  //   item: [115, 20, 7],
  // },
  {
    title: "Silikonlippe Boden - Gitterbox",
    container: glt,
    item: [113, 44, 5],
  },
  {
    title: "Silikonlippe Boden - KLT-gross",
    container: kltGross,
    item: [113, 44, 5],
  },
  {
    title: "Silikonlippe Boden - KLt-klein",
    container: kltKlein,
    item: [113, 44, 5],
  },
  {
    title: "Silikonlippe Boden - KLT-extra-klein",
    container: kltExtraKlein,
    item: [113, 44, 5],
  },
  {
    title: "Silikonlippe Boden - Greifbehälter",
    container: greifbehälter,
    item: [113, 44, 5],
  },
];

justify(combinations);
