export const createCanvas = (width, height, background) => {
    const canvas = document.createElement('canvas');

    canvas.width = width ?? window.innerWidth;
    canvas.height = height ?? window.innerHeight;

    if(background) {
        canvas.style.background = background;
    }

    return canvas;
};