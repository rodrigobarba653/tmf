/** P-type corrugated hose specification matrix (nominal × braid variants). */

export type PTypeSpecLine = {
  outsideDiameter: string;
  braidLayer: string;
  braidConfiguration: string;
  dynamicBend: string;
  burstPsig: string;
  mawpPsig: string;
  weightLbFt: string;
};

export type PTypeSpecSizeGroup = {
  nominalIn: string;
  staticBendIn: string;
  lines: readonly [PTypeSpecLine, PTypeSpecLine];
};

export const corrugatedPTypeSpecMatrix: readonly PTypeSpecSizeGroup[] = [
  {
    nominalIn: "3/8",
    staticBendIn: "1.25",
    lines: [
      {
        outsideDiameter: "0.59",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.09",
      },
      {
        outsideDiameter: "0.65",
        braidLayer: "1",
        braidConfiguration: "36 × 5 × 0.013",
        dynamicBend: "6.0",
        burstPsig: "5,618",
        mawpPsig: "1,405",
        weightLbFt: "0.20",
      },
    ],
  },
  {
    nominalIn: "1/2",
    staticBendIn: "1.50",
    lines: [
      {
        outsideDiameter: "0.79",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.12",
      },
      {
        outsideDiameter: "0.87",
        braidLayer: "1",
        braidConfiguration: "36 × 6 × 0.013",
        dynamicBend: "6.9",
        burstPsig: "4,836",
        mawpPsig: "1,209",
        weightLbFt: "0.27",
      },
    ],
  },
  {
    nominalIn: "3/4",
    staticBendIn: "2.07",
    lines: [
      {
        outsideDiameter: "1.11",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.22",
      },
      {
        outsideDiameter: "1.18",
        braidLayer: "1",
        braidConfiguration: "36 × 8 × 0.013",
        dynamicBend: "7.3",
        burstPsig: "3,698",
        mawpPsig: "924",
        weightLbFt: "0.43",
      },
    ],
  },
  {
    nominalIn: "1",
    staticBendIn: "2.4",
    lines: [
      {
        outsideDiameter: "1.42",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.27",
      },
      {
        outsideDiameter: "1.5",
        braidLayer: "1",
        braidConfiguration: "36 × 10 × 0.013",
        dynamicBend: "8.6",
        burstPsig: "2,560",
        mawpPsig: "640",
        weightLbFt: "0.51",
      },
    ],
  },
  {
    nominalIn: "1 1/4",
    staticBendIn: "2.6",
    lines: [
      {
        outsideDiameter: "1.74",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.36",
      },
      {
        outsideDiameter: "1.83",
        braidLayer: "1",
        braidConfiguration: "48 × 6 × 0.020",
        dynamicBend: "9.5",
        burstPsig: "2,845",
        mawpPsig: "711",
        weightLbFt: "0.79",
      },
    ],
  },
  {
    nominalIn: "1 1/2",
    staticBendIn: "3.3",
    lines: [
      {
        outsideDiameter: "2.01",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.41",
      },
      {
        outsideDiameter: "2.17",
        braidLayer: "1",
        braidConfiguration: "48 × 7 × 0.020",
        dynamicBend: "11.0",
        burstPsig: "1,991",
        mawpPsig: "498",
        weightLbFt: "0.93",
      },
    ],
  },
  {
    nominalIn: "2",
    staticBendIn: "4.1",
    lines: [
      {
        outsideDiameter: "2.61",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "0.69",
      },
      {
        outsideDiameter: "2.76",
        braidLayer: "1",
        braidConfiguration: "48 × 8 × 0.020",
        dynamicBend: "12.5",
        burstPsig: "2,133",
        mawpPsig: "533",
        weightLbFt: "1.28",
      },
    ],
  },
  {
    nominalIn: "2 1/2",
    staticBendIn: "5.2",
    lines: [
      {
        outsideDiameter: "3.2",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "1.32",
      },
      {
        outsideDiameter: "3.35",
        braidLayer: "1",
        braidConfiguration: "48 × 13 × 0.020",
        dynamicBend: "14.8",
        burstPsig: "1,991",
        mawpPsig: "498",
        weightLbFt: "2.32",
      },
    ],
  },
  {
    nominalIn: "3",
    staticBendIn: "6.2",
    lines: [
      {
        outsideDiameter: "3.79",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "1.65",
      },
      {
        outsideDiameter: "3.94",
        braidLayer: "1",
        braidConfiguration: "48 × 14 × 0.020",
        dynamicBend: "17.7",
        burstPsig: "1,636",
        mawpPsig: "409",
        weightLbFt: "2.74",
      },
    ],
  },
  {
    nominalIn: "4",
    staticBendIn: "7.6",
    lines: [
      {
        outsideDiameter: "5.01",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "2.29",
      },
      {
        outsideDiameter: "5.2",
        braidLayer: "1",
        braidConfiguration: "112 × 8 × 0.020",
        dynamicBend: "24.6",
        burstPsig: "996",
        mawpPsig: "249",
        weightLbFt: "3.69",
      },
    ],
  },
  {
    nominalIn: "6",
    staticBendIn: "11.5",
    lines: [
      {
        outsideDiameter: "6.86",
        braidLayer: "0",
        braidConfiguration: "—",
        dynamicBend: "—",
        burstPsig: "—",
        mawpPsig: "—",
        weightLbFt: "5.44",
      },
      {
        outsideDiameter: "6.97",
        braidLayer: "1",
        braidConfiguration: "112 × 11 × 0.020",
        dynamicBend: "40.0",
        burstPsig: "882",
        mawpPsig: "220",
        weightLbFt: "7.46",
      },
    ],
  },
] as const;
