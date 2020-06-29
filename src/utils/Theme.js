const darkTheme = {
    '--dark-color': 'rgba(75, 112, 145)',
    '--light-color': 'rgba(206, 221, 235)',
    '--light-color-3': 'rgba(206, 221, 235,0.5)',
    '--tile-color': 'white',
};

const lightTheme = {
    '--dark-color': 'rgba(206, 221, 235)',
    '--light-color': 'rgba(75, 112, 145)',
    '--light-color-3': 'rgba(75, 112, 145, 0.3)',
    '--tile-color': 'rgba(55, 62, 69)',
};

export const applyTheme = (nextTheme) => {
    const theme = nextTheme === 'dark' ? lightTheme : darkTheme;
    Object.keys(theme).forEach((key) => {
        const value = theme[key];
        document.documentElement.style.setProperty(key, value);
    });
};
