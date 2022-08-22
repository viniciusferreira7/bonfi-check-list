import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import { CheckList } from '../CheckList'
import { ReadBarcode } from '../ReadBarcode'
import { MainContainer } from './styles'

export function Main() {
  return (
    <MainContainer>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Ordem de produção / <strong>Production order</strong>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ReadBarcode />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                ID Operador / <strong>Operator IP</strong>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ReadBarcode />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Códigos / <strong>Codes</strong>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <Accordion allowToggle>
            <AccordionPanel pb={4}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Número de Série dos Redutores /
                      <strong>Gear box serial Number</strong>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>
                    ler o código de barras para preencimento e pular para campo
                    motor
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Número de Série dos Motores - JB00008453 /{' '}
                      <strong>Motor serial Number - JB00004853</strong>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>
                    ler o código de barras para preencimento e pular para campo
                    verificação
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </AccordionPanel>
          </Accordion>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Check list
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CheckList />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Numero de série do redutor em inspeção /
                <strong>Gearbox serial number in checking</strong>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>
              ler código de barras do numero de série para iniciar a próxima
              peça
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Finalizar / <strong>Finish</strong>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>
              ler código de barras do numero de série para finalizar o processo
              e imprimir em pdf e enviar por e-mail
              tadeu.goncalves@bonfiglioli.com
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </MainContainer>
  )
}
