
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Link, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Text sx={{"fontFamily": "Salsa", "fontWeight": "300", "fontSize": "1.5em", "color": "#14A1F0"}}>
  {`kivaN`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`1em`}>
  <Avatar name={`Ivan Rojas`} size={`xl`} src={`avatar.jpg`} sx={{"alt": "foto perfil de Ivan Rojas", "color": "#C3C7C8", "bg": "#0C151D", "padding": "2px", "border": "4px", "borderColor": "#14A1F0"}}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Ivan Rojas`}
</Heading>
  <Link as={NextLink} href={`https://www.instagram.com/k.kivan.r/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Text sx={{"marginTop": "0px !important", "color": "#C3C7C8"}}>
  {`@k.ivan.r`}
</Text>
</Link>
</VStack>
</HStack>
  <Flex sx={{"width": "100%", "gap": "0.5em"}}>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7C8"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`First B2`}
</Text>
  {` Cambridge`}
</Box>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7C8"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`Full Stack`}
</Text>
  {` Python`}
</Box>
</Flex>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7C8"}}>
  {`Soy ingeniero informático titulado de la Universidad       Tecnológica de Chile INACAP.
      Actualmente estoy haciendo un gran cambio de mi carrera como profesional pasando de SOPORTE TI a DESARROLLADOR WEB.
      Aquí prodrás encontrar todos mis enlaces de interés. !Bienvenid@!`}
</Text>
</VStack>
  <VStack spacing={`0.8em`} sx={{"width": "100%"}}>
  <Heading sx={{"fontFamily": "Poppins", "width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontWeight": "500"}}>
  {`Mis redes`}
</Heading>
  <Link as={NextLink} href={`https://github.com/ivan-rojas-h`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#C3C7C8", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087EC4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Github`} src={`/icons/github.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Github`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7C8"}}>
  {`Da una vuelta por mi repositorio`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/kivan-rojas/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#C3C7C8", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087EC4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`LinkedIn`} src={`/icons/linkedin.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`LinkedIn`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7C8"}}>
  {`Mi perfil profesional con más detalle`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/k.kivan.r/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#C3C7C8", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087EC4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Instagram`} src={`/icons/instagram.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Instagram`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7C8"}}>
  {`Un poco de mi dia a dia`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading sx={{"fontFamily": "Poppins", "width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontWeight": "500"}}>
  {`Contacto`}
</Heading>
  <Link as={NextLink} href={`mailto: irojas.h25@gmail.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#C3C7C8", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087EC4"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Email`} src={`/icons/mail.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Email`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7C8"}}>
  {`irojas.h25@gmail.com`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack sx={{"marginBottom": "2em", "paddingBottom": "2em", "paddingX": "2em", "color": "#EEE"}}>
  <Text sx={{"fontSize": "0.8em", "marginTop": "0px !important"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`2024. KIVAN BY IVAN ROJAS. `}
</Text>
  {`STARTING MY JOURNEY AS A WEB DEVELOPER`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`kivaN | Desarrollador fullstack`}
</title>
  <meta content={`Saludos, mi nombre Ivan Rojas. Desarrollador fulltack`} name={`description`}/>
  <meta content={`avatar.jpg`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
