import reflex as rx
from link_bio.styles.styles import Size as Size
from link_bio.components.info_text import info_text
from link_bio.styles.colors import TextColor as TextColor
from link_bio.styles.colors import Color as Color
import link_bio.views.constants as const


def header() -> rx.Component:
  return rx.vstack(
    rx.hstack(
      rx.avatar(
        name="Ivan Rojas",
        src="avatar.jpg",
        alt="foto perfil de Ivan Rojas",
        size="xl",
        color=TextColor.BODY.value,
        bg=Color.BACKGROUND.value,
        padding="2px",
        border="4px",
        border_color=Color.PRIMARY.value
      ),
      rx.vstack(
        rx.heading(
          "Ivan Rojas",
          size="lg"
        ),
        rx.link(
          rx.text(
            "@k.ivan.r",
            margin_top=Size.ZERO.value,
            color=TextColor.BODY.value 
          ),
          href=const.INSTAGRAM_URL,
          is_external=True,
        ),
        align_items="start",
      ),
      spacing=Size.DEFAULT.value
    ),

    rx.flex(
      info_text("First B2", "Cambridge"),
      info_text("Full Stack", "Python"),
      width="100%",
      gap=Size.SMALL.value
    ),
    rx.text(
      """Soy ingeniero informático titulado de la Universidad       Tecnológica de Chile INACAP.
      Actualmente estoy haciendo un gran cambio de mi carrera como profesional pasando de SOPORTE TI a DESARROLLADOR WEB.
      Aquí prodrás encontrar todos mis enlaces de interés. !Bienvenid@!""",
      font_size=Size.MEDIUM.value,
      color=TextColor.BODY.value
    ),
    spacing=Size.BIG.value,
    align_items="start"
  )