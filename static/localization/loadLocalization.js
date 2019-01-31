const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

module.exports = () => {

  const localizationYmlsDir = path.join(__dirname, 'yml')
  const localizationYmlsFileNames = fs.readdirSync(localizationYmlsDir)

  return localizationYmlsFileNames.reduce((localizationData, localizationYmlFileName) => {

    const localizationYmlFilePath = path.join(localizationYmlsDir, localizationYmlFileName)
    const localizationYmlFileData = fs.readFileSync(localizationYmlFilePath, {encoding: 'utf8'})
    const localizationYmlFileDataAsJson = yaml.safeLoad(localizationYmlFileData)
    const localizationFileNameWithoutExtension = localizationYmlFileName.split('.')[0]

    localizationData[localizationFileNameWithoutExtension] = localizationYmlFileDataAsJson

    return localizationData
  }, {})
}

