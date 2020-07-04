const lightTheme = {
    '--dark-color': 'rgba(75, 112, 145)',
    '--dark-color-3': 'rgba(75, 112, 145, 0.3)',
    '--light-color': 'rgba(206, 221, 235)',
    '--light-color-3': 'rgba(206, 221, 235, 0.3)',
    '--shadow-color': 'rgba(107, 115, 122)',
    '--shadow-color-3': 'rgba(107, 115, 122, 0.3)',
    '--tile-color': 'white',
    '--tile-color-3': 'rgba(255, 255, 255, 0.3)',
    '--tile-color-8': 'rgba(255, 255, 255, 0.8)',
    '--box-shadow-color': 'rgba(75, 112, 145, 0.5)',
};

const darkTheme = {
    '--dark-color': 'rgba(206, 221, 235)',
    '--dark-color-3': 'rgba(206, 221, 235, 0.3)',
    '--tile-color': 'rgba(75, 112, 145)',
    '--tile-color-3': 'rgba(75, 112, 145, 0.6)',
    '--tile-color-8': 'rgba(75, 112, 145, 0.8)',
    '--light-color': 'rgba(55, 62, 69)',
    '--light-color-3': 'rgba(55, 62, 69, 0.3)',
    '--shadow-color': 'rgba(150, 177, 214)',
    '--shadow-color-3': 'rgba(150, 166, 181, 0.3)',
    '--box-shadow-color': 'rgba(55, 62, 69, 0.5)',
};

export const applyTheme = (nextTheme) => {
    const theme = nextTheme === 'dark' ? lightTheme : darkTheme;
    Object.keys(theme).forEach((key) => {
        const value = theme[key];
        document.documentElement.style.setProperty(key, value);
    });
};
