function rule(num) {
  if (num >= 5.75) {
    return 2;
  } else if (num >= 5.25) {
    return 1.5;
  } else if (num >= 4.75) {
    return 1;
  } else if (num >= 4.25) {
    return 0.5;
  } else if (num >= 3.75) {
    return 0;
  } else if (num >= 3.25) {
    return -1;
  } else if (num >= 2.75) {
    return -2;
  } else if (num >= 2.25) {
    return -3;
  } else if (num >= 1.75) {
    return -4;
  } else if (num >= 1.25) {
    return -5;
  } else if (num >= 0.75) {
    return -6;
  }
}

export default rule;
