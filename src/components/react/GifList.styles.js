import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "masonary": {
        "display": "flex",
        "flexDirection": "column",
        "flexWrap": "wrap",
        "height": 100 * vh,
        "fontSize": 0,
        "overflow": "scroll",
        "backgroundImage": "url('https://www.toptal.com/designers/subtlepatterns/patterns/darkness.png')"
    },
    "masonary masonry-tile": {
        "width": "90%",
        "position": "relative",
        "cursor": "pointer",
        "marginTop": 0.3,
        "marginRight": 0.3,
        "marginBottom": 0.3,
        "marginLeft": 0.3
    },
    "masonary masonry-tileactive": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": 100 * vw,
        "height": 100 * vh,
        "boxSizing": "border-box",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "background": "rgba(0, 0, 0, 0.6)",
        "zIndex": 20
    },
    "masonary masonry-tileactive img": {
        "width": "auto",
        "maxWidth": "100%",
        "height": "auto",
        "maxHeight": "100%"
    },
    "masonary img": {
        "width": "100%"
    },
    "masonry-tile:not(active):hover GifList-item__hover": {
        "zIndex": 10,
        "display": "flex",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "fontSize": 17,
        "color": "white",
        "alignItems": "center",
        "justifyContent": "center",
        "background": "rgba(255, 255, 255, 0.37)"
    }
});