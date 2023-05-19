function getColorFromValue(value) {
  if (value === 2) {
    return "green";
  } else if (value >= 1.5) {
    return "lime";
  } else if (value >= 1) {
    return "orange";
  } else if (value >= 0.5) {
    return "goldenrod";
  } else if (value >= 0) {
    return "orangered";
  } else {
    return "red";
  }
}

function getColorFromTotalValue(value) {
  if (value >= 2) {
    return "green";
  } else if (value >= 1.5) {
    return "lime";
  } else if (value >= 1) {
    return "orange";
  } else if (value >= 0.5) {
    return "goldenrod";
  } else if (value >= 0) {
    return "orangered";
  } else {
    return "red";
  }
}

export { getColorFromValue, getColorFromTotalValue };
