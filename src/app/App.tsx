import { Box, Button } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { metaMask } from 'connectors/metaMask'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()
  const web3 = useWeb3React()
  const [metamaskHooks] = metaMask
  const connectMetamask = () => {
    metamaskHooks.activate()
  }

  console.log(web3)
  return (
    <Box>
      <Button variant='contained' onClick={connectMetamask}>
        {t('connectWallet')}
      </Button>
      <Button variant='contained' color='secondary' onClick={connectMetamask}>
        {t('connectWallet')}
      </Button>

      {web3 && web3.account}
    </Box>
  )
}

export default App
