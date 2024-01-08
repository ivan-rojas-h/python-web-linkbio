from rxconfig import config
import reflex as rx
from link_bio.components.navbar import navbar
from link_bio.components.footer import footer
from link_bio.views.header.header import header
from link_bio.views.links.links import links
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size

filename = f"{config.app_name}/{config.app_name}.py"

class State(rx.State):
  pass

def index() -> rx.Component:
  return rx.box(
    navbar(),
    rx.center(
      rx.vstack(
        header(),
        links(),
        max_width=styles.MAX_WIDTH,
        width="100%",
        margin_y=Size.BIG.value,
        padding=Size.BIG.value
      )
    ),
    footer()
  )

  
app = rx.App(
  stylesheets=styles.STYLESHEETS,
  style=styles.BASE_STYLE
)
app.add_page(
  index,
  title="kivaN | Desarrollador fullstack",
  description="Saludos, mi nombre Ivan Rojas. Desarrollador fulltack",
  image="avatar.jpg"
)
app.compile()