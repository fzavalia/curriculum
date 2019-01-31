const fs = require('fs')
const rimraf = require('rimraf')
const path = require('path')
const yaml = require('js-yaml')

const localizationYmlsDir = path.join(__dirname, 'yml')

const localizationJsonsDir = path.join(__dirname, 'json')

const localizationYmlsFileNames = fs.readdirSync(localizationYmlsDir)

rimraf.sync(localizationJsonsDir)

fs.mkdirSync(localizationJsonsDir)

localizationYmlsFileNames.forEach(localizationYmlFileName => {

  const localizationYmlFilePath = path.join(localizationYmlsDir, localizationYmlFileName)

  const localizationYmlFileData = fs.readFileSync(localizationYmlFilePath, {encoding: 'utf8'})

  const localizationYmlFileDataAsJson = yaml.safeLoad(localizationYmlFileData)

  const localizationFileNameWithoutExtension = localizationYmlFileName.split('.')[0]

  const localizationJsonFilePath = path.join(localizationJsonsDir, localizationFileNameWithoutExtension + '.json')

  fs.writeFileSync(localizationJsonFilePath, JSON.stringify(localizationYmlFileDataAsJson))
})