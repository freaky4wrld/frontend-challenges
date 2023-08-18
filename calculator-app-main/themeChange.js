const themeSlider = document.getElementById('calc-theme');
const rootStyle = document.querySelector(':root');

var backgroundColor = {
    main: 'hsl(222, 26%, 31%)',
    screen: 'hsl(224, 36%, 15%)',
    toggleAndKey: 'hsl(223, 31%, 20%)',
}

var keyColorAndShadow = {
    ansAndToggle: {
        color: 'hsl(6, 63%, 50%)',
        shadow: 'hsl(6, 70%, 34%)',
    },
    reset: {
        color: 'hsl(225, 21%, 49%)',
        shadow: 'hsl(224, 28%, 35%)',
    },
    num: {
        color: 'hsl(30, 25%, 89%)',
        shadow: 'hsl(28, 16%, 65%)',
    },
}

var textColor = {
    light: 'hsl(0, 0%, 100%)',
    dark: 'hsl(221, 14%, 31%)',
}

var backgroundColor2 = {
    main: 'hsl(0, 0%, 90%)',
    screen: 'hsl(0, 0%, 93%)',
    toggleAndKey: 'hsl(0, 5%, 81%)',
}

var keyColorAndShadow2 = {
    ansAndToggle: {
        color: 'hsl(25, 98%, 40%)',
        shadow: 'hsl(25, 99%, 27%)',
    },
    reset: {
        color: 'hsl(45, 7%, 89%)',
        shadow: 'hsl(35, 11%, 61%)',
    },
    num: {
        color: 'hsl(185, 42%, 37%)',
        shadow: 'hsl(185, 58%, 25%)',
    },
}

var textColor2 = {
    light: 'hsl(0, 0%, 100%)',
    dark: 'hsl(60, 10%, 19%)',
}

var backgroundColor3 = {
    main: 'hsl(268, 75%, 9%)',
    screen: 'hsl(268, 71%, 12%)',
    toggleAndKey: 'hsl(268, 71%, 12%)',
}

var keyColorAndShadow3 = {
    ansAndToggle: {
        color: 'hsl(176, 100%, 44%)',
        shadow: 'hsl(177, 92%, 70%)',
    },
    reset: {
        color: 'hsl(268, 47%, 21%)',
        shadow: 'hsl(290, 70%, 36%)',
    },
    num: {
        color: 'hsl(281, 89%, 26%)',
        shadow: 'hsl(285, 91%, 52%)',
    },
}

var textColor3 = {
    light: 'hsl(0, 0%, 100%)',
    dark: 'hsl(198, 20%, 13%)',
}

var themeOneDesignSpecs = [backgroundColor, keyColorAndShadow, textColor];
var themeTwoDesignSpecs = [backgroundColor2, keyColorAndShadow2, textColor2];
var themeThreeDesignSpecs = [backgroundColor3, keyColorAndShadow3, textColor3];


themeSlider.addEventListener('input', ()=>{
    switch (themeSlider.value) {
        case '1':
            // setThemeSpecs(themeOneDesignSpecs);
            console.log(1)
            break;
        case '2':
            // setThemeSpecs(themeTwoDesignSpecs);
            console.log(2)
        case '3':
            // setThemeSpecs(themeThreeDesignSpecs);
            console.log(3)
            break;
        default:
            // setThemeSpecs(themeOneDesignSpecs);
            break;
    }
})

function setThemeSpecs(arr){
    rootStyle.style.setProperty('--main-background',arr[0].main);
}