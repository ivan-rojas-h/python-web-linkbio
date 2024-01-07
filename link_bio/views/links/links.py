import reflex as rx
from link_bio.components.link_button import link_button
from link_bio.components.title import title
from link_bio.styles.styles import Size as Size
import link_bio.views.constants as const

def links() -> rx.Component:
  return rx.vstack(
    title("Mis redes"),
    link_button(
      "Github", 
      "Da una vuelta por mi repositorio", 
      "/icons/github.svg",
      const.GITHUB_URL
    ),
    link_button(
      "LinkedIn", 
      "Mi perfil profesional con más detalle", 
      "/icons/linkedin.svg",
      const.LINKEDIN_URL
    ),
    link_button(
      "Instagram", 
      "Un poco de mi dia a dia", 
      "/icons/instagram.svg",
      const.INSTAGRAM_URL
    ),
    title("Contacto"),
    link_button(
      "Email",
      const.EMAIL,
      "/icons/mail.svg",
      f"mailto: {const.EMAIL}"
    ),
    width="100%",
    spacing=Size.MEDIUM.value
  )