/** N-type corrugated hose specification matrix (nominal × braid variants). */

export type NTypeSpecLine = {
  outsideDiameter: string;
  braidLayer: string;
  braidConfiguration: string;
  dynamicBend: string;
  burstPsig: string;
  mawpPsig: string;
  weightLbFt: string;
};

export type NTypeSpecSizeGroup = {
  nominalIn: string;
  staticBendIn: string;
  lines: readonly [NTypeSpecLine, NTypeSpecLine];
};

export const corrugatedNTypeSpecMatrix: readonly NTypeSpecSizeGroup[] = [
  {
    nominalIn: "3/8",
    staticBendIn: "1.52",
    lines: [
      {
        outsideDiameter: "0.59",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.07",
      },
      {
        outsideDiameter: "0.65",
        braidLayer: "1",
        braidConfiguration: "36 × 5 × 0.013",
        dynamicBend: "5.91",
        burstPsig: "7,680",
        mawpPsig: "1,920",
        weightLbFt: "0.18",
      },
    ],
  },
  {
    nominalIn: "1/2",
    staticBendIn: "1.75",
    lines: [
      {
        outsideDiameter: "0.79",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.10",
      },
      {
        outsideDiameter: "0.87",
        braidLayer: "1",
        braidConfiguration: "36 × 6 × 0.013",
        dynamicBend: "6.50",
        burstPsig: "5,974",
        mawpPsig: "1,493",
        weightLbFt: "0.23",
      },
    ],
  },
  {
    nominalIn: "3/4",
    staticBendIn: "2.65",
    lines: [
      {
        outsideDiameter: "1.11",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.16",
      },
      {
        outsideDiameter: "1.18",
        braidLayer: "1",
        braidConfiguration: "36 × 8 × 0.013",
        dynamicBend: "8.86",
        burstPsig: "3,271",
        mawpPsig: "818",
        weightLbFt: "0.34",
      },
    ],
  },
  {
    nominalIn: "1",
    staticBendIn: "3.3",
    lines: [
      {
        outsideDiameter: "1.42",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.23",
      },
      {
        outsideDiameter: "1.5",
        braidLayer: "1",
        braidConfiguration: "36 × 10 × 0.013",
        dynamicBend: "10.24",
        burstPsig: "2,560",
        mawpPsig: "640",
        weightLbFt: "0.46",
      },
    ],
  },
  {
    nominalIn: "1 1/4",
    staticBendIn: "4.0",
    lines: [
      {
        outsideDiameter: "1.74",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.27",
      },
      {
        outsideDiameter: "1.83",
        braidLayer: "1",
        braidConfiguration: "48 × 6 × 0.020",
        dynamicBend: "11.81",
        burstPsig: "3,271",
        mawpPsig: "818",
        weightLbFt: "0.70",
      },
    ],
  },
  {
    nominalIn: "1 1/2",
    staticBendIn: "5.0",
    lines: [
      {
        outsideDiameter: "2.01",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.33",
      },
      {
        outsideDiameter: "2.17",
        braidLayer: "1",
        braidConfiguration: "48 × 7 × 0.020",
        dynamicBend: "13.39",
        burstPsig: "2,276",
        mawpPsig: "569",
        weightLbFt: "0.85",
      },
    ],
  },
  {
    nominalIn: "2",
    staticBendIn: "6.1",
    lines: [
      {
        outsideDiameter: "2.61",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.54",
      },
      {
        outsideDiameter: "2.76",
        braidLayer: "1",
        braidConfiguration: "48 × 8 × 0.020",
        dynamicBend: "15.35",
        burstPsig: "1,920",
        mawpPsig: "480",
        weightLbFt: "1.12",
      },
    ],
  },
  {
    nominalIn: "2 1/2",
    staticBendIn: "7.4",
    lines: [
      {
        outsideDiameter: "3.2",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.86",
      },
      {
        outsideDiameter: "3.35",
        braidLayer: "1",
        braidConfiguration: "48 × 13 × 0.020",
        dynamicBend: "18.11",
        burstPsig: "1,991",
        mawpPsig: "498",
        weightLbFt: "1.84",
      },
    ],
  },
  {
    nominalIn: "3",
    staticBendIn: "8.4",
    lines: [
      {
        outsideDiameter: "3.79",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.99",
      },
      {
        outsideDiameter: "3.94",
        braidLayer: "1",
        braidConfiguration: "48 × 14 × 0.020",
        dynamicBend: "21.98",
        burstPsig: "1,493",
        mawpPsig: "373",
        weightLbFt: "2.07",
      },
    ],
  },
  {
    nominalIn: "4",
    staticBendIn: "12",
    lines: [
      {
        outsideDiameter: "5.01",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "1.34",
      },
      {
        outsideDiameter: "5.2",
        braidLayer: "1",
        braidConfiguration: "112 × 8 × 0.020",
        dynamicBend: "26.53",
        burstPsig: "1,422",
        mawpPsig: "356",
        weightLbFt: "2.77",
      },
    ],
  },
  {
    nominalIn: "6",
    staticBendIn: "18",
    lines: [
      {
        outsideDiameter: "6.86",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "2.75",
      },
      {
        outsideDiameter: "6.97",
        braidLayer: "1",
        braidConfiguration: "112 × 11 × 0.020",
        dynamicBend: "41.33",
        burstPsig: "754",
        mawpPsig: "188",
        weightLbFt: "4.16",
      },
    ],
  },
  {
    nominalIn: "8",
    staticBendIn: "19",
    lines: [
      {
        outsideDiameter: "9.02",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "3.63",
      },
      {
        outsideDiameter: "9.15",
        braidLayer: "1",
        braidConfiguration: "112 × 14 × 0.020",
        dynamicBend: "62.99",
        burstPsig: "626",
        mawpPsig: "156",
        weightLbFt: "5.98",
      },
    ],
  },
  {
    nominalIn: "10",
    staticBendIn: "24",
    lines: [
      {
        outsideDiameter: "11.19",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "4.15",
      },
      {
        outsideDiameter: "11.38",
        braidLayer: "BB",
        braidConfiguration: "96 × 25 × 0.027",
        dynamicBend: "78.74",
        burstPsig: "796",
        mawpPsig: "199",
        weightLbFt: "10.20",
      },
    ],
  },
  {
    nominalIn: "12",
    staticBendIn: "29",
    lines: [
      {
        outsideDiameter: "13.17",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "5.96",
      },
      {
        outsideDiameter: "13.54",
        braidLayer: "BB",
        braidConfiguration: "96 × 25 × 0.027",
        dynamicBend: "94.48",
        burstPsig: "768",
        mawpPsig: "192",
        weightLbFt: "12.01",
      },
    ],
  },
] as const;
