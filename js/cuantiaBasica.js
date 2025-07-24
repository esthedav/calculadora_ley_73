function cuantiaBasica(spd, minSalary = 278.8) {
  let factorCuantia = 80.0;
  let incrementosAdicionales = 0.563;
  const toFactorCuantia = (cuantiaBasica) =>
    Number((cuantiaBasica / 100).toFixed(4));
  const toIncremetosAdicionales = (incrementosAnuales) =>
    Number((incrementosAnuales / 100).toFixed(5));
  const toVSM = (vsm) => Number((minSalary * vsm).toFixed(2));

  if (spd > toVSM(6)) {
    factorCuantia = toFactorCuantia(13);
    incrementosAdicionales = toIncremetosAdicionales(2.45);
  } else if (spd > toVSM(5.75)) {
    factorCuantia = toFactorCuantia(13.62);
    incrementosAdicionales = toIncremetosAdicionales(2.433);
  } else if (spd > toVSM(5.5)) {
    factorCuantia = toFactorCuantia(14.22);
    incrementosAdicionales = toIncremetosAdicionales(2.416);
  } else if (spd > toVSM(5.25)) {
    factorCuantia = toFactorCuantia(14.88);
    incrementosAdicionales = toIncremetosAdicionales(2.398);
  } else if (spd > toVSM(5)) {
    factorCuantia = toFactorCuantia(15.61);
    incrementosAdicionales = toIncremetosAdicionales(2.377);
  } else if (spd > toVSM(4.75)) {
    factorCuantia = toFactorCuantia(16.41);
    incrementosAdicionales = toIncremetosAdicionales(2.355);
  } else if (spd > toVSM(4.5)) {
    factorCuantia = toFactorCuantia(17.3);
    incrementosAdicionales = toIncremetosAdicionales(2.33);
  } else if (spd > toVSM(4.25)) {
    factorCuantia = toFactorCuantia(18.29);
    incrementosAdicionales = toIncremetosAdicionales(2.302);
  } else if (spd > toVSM(4)) {
    factorCuantia = toFactorCuantia(19.39);
    incrementosAdicionales = toIncremetosAdicionales(2.271);
  } else if (spd > toVSM(3.75)) {
    factorCuantia = toFactorCuantia(20.65);
    incrementosAdicionales = toIncremetosAdicionales(2.235);
  } else if (spd > toVSM(3.5)) {
    factorCuantia = toFactorCuantia(22.07);
    incrementosAdicionales = toIncremetosAdicionales(2.195);
  } else if (spd > toVSM(3.25)) {
    factorCuantia = toFactorCuantia(23.7);
    incrementosAdicionales = toIncremetosAdicionales(2.149);
  } else if (spd > toVSM(3)) {
    factorCuantia = toFactorCuantia(25.6);
    incrementosAdicionales = toIncremetosAdicionales(2.096);
  } else if (spd > toVSM(2.75)) {
    factorCuantia = toFactorCuantia(27.83);
    incrementosAdicionales = toIncremetosAdicionales(2.033);
  } else if (spd > toVSM(2.5)) {
    factorCuantia = toFactorCuantia(30.48);
    incrementosAdicionales = toIncremetosAdicionales(1.958);
  } else if (spd > toVSM(2.25)) {
    factorCuantia = toFactorCuantia(33.68);
    incrementosAdicionales = toIncremetosAdicionales(1.868);
  } else if (spd > toVSM(2)) {
    factorCuantia = toFactorCuantia(37.65);
    incrementosAdicionales = toIncremetosAdicionales(1.756);
  } else if (spd > toVSM(1.75)) {
    factorCuantia = toFactorCuantia(42.67);
    incrementosAdicionales = toIncremetosAdicionales(1.615);
  } else if (spd > toVSM(1.5)) {
    factorCuantia = toFactorCuantia(49.23);
    incrementosAdicionales = toIncremetosAdicionales(1.43);
  } else if (spd > toVSM(1.25)) {
    factorCuantia = toFactorCuantia(58.18);
    incrementosAdicionales = toIncremetosAdicionales(1.178);
  } else if (spd > toVSM(1)) {
    factorCuantia = toFactorCuantia(77.11);
    incrementosAdicionales = toIncremetosAdicionales(0.814);
  } else {
    factorCuantia = toFactorCuantia(factorCuantia);
    incrementosAdicionales = toIncremetosAdicionales(incrementosAdicionales);
  }

  return { factorCuantia, incrementosAdicionales };
}

export { cuantiaBasica };
