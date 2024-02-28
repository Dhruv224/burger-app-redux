export const toggleTheme = (themeMode) => {
    return {
        type: "TOGGLE_THEME",
        payload: !themeMode
    }
}