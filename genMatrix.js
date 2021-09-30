'use strict';
const path = require('path');
const fs = require('fs');

const generateBuildMatrix = () => {
  const entries = [
    {OPENJDK_TAG: "8u302", SBT_VERSION: "0.13.17"},
    {OPENJDK_TAG: "8u292", SBT_VERSION: "0.13.17"},
  ]

  // Return null if there are no entries so we can skip the matrix step
  return entries.length
    ? { include: entries }
    : null;
};

module.exports = generateBuildMatrix;
