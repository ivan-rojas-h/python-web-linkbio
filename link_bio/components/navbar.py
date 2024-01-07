import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import Color

def navbar() -> rx.Component:
  return rx.hstack(
    rx.text(
      "kivaN",
      style=styles.navbar_title_style
    ),
    position="sticky",
    bg=Color.CONTENT.value,
    padding_x=Size.BIG.value,
    padding_Y=Size.DEFAULT.value,
    z_index="999",
    top="0"
  )