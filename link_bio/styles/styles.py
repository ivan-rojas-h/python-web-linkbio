import reflex as rx
from enum import Enum
from .colors import Color as Color
from .colors import TextColor as TextColor
from .fonts import Font, FontWeight

# Constants
MAX_WIDTH = "600px"

STYLESHEETS = [
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap",
  "https://fonts.googleapis.com/css2?family=Salsa&display=swap",
]

# Sizes
class Size(Enum):
  ZERO="0px !important"
  SMALL="0.5em"
  MEDIUM="0.8em"
  DEFAULT="1em"
  LARGE="1.5em"
  BIG="2em"

# Styles  
BASE_STYLE = {
  "font_family": Font.DEFAULT.value,
  "font_weight": FontWeight.LIGHT.value,
  "background_color": Color.BACKGROUND.value,
  rx.Heading: {
    "color": TextColor.HEADER.value,
    "font_family": Font.TITLE.value,
    "font_weight": FontWeight.MEDIUM.value
  },
  rx.Button: {
    "width": "100%",
    "height": "100%",
    "padding": Size.SMALL.value,
    "border-radius": Size.DEFAULT.value,
    "color": TextColor.BODY.value,
    "background_color": Color.CONTENT.value,
    "white_space": "normal",
    "text_align": "start",
    "_hover": {
      "background-color": Color.SECONDARY.value,
    }
  },
  rx.Link: {
    "text_decoration": "none",
    "_hover": {}
  }
}

navbar_title_style = dict(
  font_family=Font.LOGO.value,
  font_weight=FontWeight.LIGHT.value,
  font_size=Size.LARGE.value,
  color=Color.PRIMARY.value
)

title_style = dict(
  font_family=Font.TITLE.value,
  width="100%",
  padding_top=Size.DEFAULT.value,
  color=TextColor.HEADER.value
)

button_title_style = dict(
  font_weight=FontWeight.MEDIUM.value,
  font_size=Size.DEFAULT.value,
  color=TextColor.HEADER.value
)

button_body_style = dict(
  font_weight=FontWeight.LIGHT.value,
  font_size=Size.MEDIUM.value,
  color=TextColor.BODY.value
)

