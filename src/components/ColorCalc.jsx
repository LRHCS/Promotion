function getColorFromValue(value) {
  if (value <= 0) {
    return "darkred";
  } else if (value < 0.25) {
    return "orangered";
  } else if (value < 0.5) {
    return "goldenrod";
  } else if (value < 0.75) {
    return "darkgoldenrod";
  } else if (value < 1) {
    return "orange";
  } else if (value < 1.25) {
    return "lime";
  } else if (value < 1.5) {
    return "limegreen";
  } else if (value < 1.75) {
    return "mediumseagreen";
  } else if (value < 2) {
    return "green";
  } else {
    return "darkgreen";
  }
}

function getColorFromTotalValue(value) {
  if (value <= 0) {
    return "darkred";
  } else if (value < 0.25) {
    return "orangered";
  } else if (value < 0.5) {
    return "goldenrod";
  } else if (value < 0.75) {
    return "darkgoldenrod";
  } else if (value < 1) {
    return "orange";
  } else if (value < 1.25) {
    return "lime";
  } else if (value < 1.5) {
    return "limegreen";
  } else if (value < 1.75) {
    return "mediumseagreen";
  } else if (value < 2) {
    return "green";
  } else {
    return "darkgreen";
  }
}

export { getColorFromValue, getColorFromTotalValue };
