const PirateNationSmartContract = artifacts.require(
  'PirateNationContractTruffle'
);

module.exports = function(deployer) {
  deployer.deploy(PirateNationSmartContract);
};
