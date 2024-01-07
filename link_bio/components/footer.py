import reflex as rx
import datetime
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import TextColor as TextColor
from link_bio.styles.colors import Color as Color

def footer() -> rx.Component:
  return rx.vstack(
    rx.text(
      rx.span(
        f"{datetime.date.today().year}. KIVAN BY IVAN ROJAS. ",
        color=Color.PRIMARY.value
      ),
      "STARTING MY JOURNEY AS A WEB DEVELOPER",
      font_size=Size.MEDIUM.value,
      margin_top=Size.ZERO.value
    ),
    margin_bottom=Size.BIG.value,
    padding_bottom=Size.BIG.value,
    padding_x=Size.BIG.value,
    color=TextColor.FOOTER.value
  )