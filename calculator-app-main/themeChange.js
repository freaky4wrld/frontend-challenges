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
    head: 'hsl(0, 0%, 100%)',
    num: 'hsl(221, 14%, 31%)',
    resetDel: 'hsl(0, 0%, 100%)',
    ans: 'hsl(0, 0%, 100%)',
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
        color: 'hsl(185, 42%, 37%)',
        shadow: 'hsl(185, 58%, 25%)',
    },
    
    num: {
        color: 'hsl(45, 7%, 89%)',
        shadow: 'hsl(35, 11%, 61%)',
    },
}

var textColor2 = {
    head: 'hsl(60, 10%, 19%)',
    num: 'hsl(60, 10%, 19%)',
    resetDel: 'hsl(0, 0%, 100%)',
    ans: 'hsl(0, 0%, 100%)',
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
    head: 'hsl(52, 100%, 62%)',
    num: 'hsl(52, 100%, 62%)',
    resetDel: 'hsl(0, 0%, 100%)',
    ans: 'hsl(198, 20%, 13%)',
}

var themeOneDesignSpecs = [backgroundColor, keyColorAndShadow, textColor];
var themeTwoDesignSpecs = [backgroundColor2, keyColorAndShadow2, textColor2];
var themeThreeDesignSpecs = [backgroundColor3, keyColorAndShadow3, textColor3];


themeSlider.addEventListener('input', ()=>{
    switch (themeSlider.value) {
        case '1':
            setThemeSpecs(themeOneDesignSpecs);
            break;
        case '2':
            setThemeSpecs(themeTwoDesignSpecs);
            break;
        case '3':
            setThemeSpecs(themeThreeDesignSpecs);
            break;
        default:
            setThemeSpecs(themeOneDesignSpecs);
            break;
    }
})

function setThemeSpecs(arr){
    // backgoround color change
    rootStyle.style.setProperty('--main-background',arr[0].main);
    rootStyle.style.setProperty('--screen-background', arr[0].screen);
    rootStyle.style.setProperty('--toggle-and-key-background', arr[0].toggleAndKey);
    
    // key and toggle color change

    // toggle and ans key
    rootStyle.style.setProperty('--toggle-and-ans-key-color',arr[1].ansAndToggle.color);
    rootStyle.style.setProperty('--toggle-and-ans-key-shadow', arr[1].ansAndToggle.shadow);
    //  reset and del key
    rootStyle.style.setProperty('--reset-del-key-color',arr[1].reset.color);
    rootStyle.style.setProperty('--reset-del-key-shadow', arr[1].reset.shadow);
    // num and operaions key
    rootStyle.style.setProperty('--num-operations-key-color',arr[1].num.color);
    rootStyle.style.setProperty('--num-operations-key-shadow', arr[1].num.shadow);

    // text color change
    rootStyle.style.setProperty('--text-head', arr[2].head)
    rootStyle.style.setProperty('--text-num',arr[2].num);
    rootStyle.style.setProperty('--text-reset-del', arr[2].resetDel);
    rootStyle.style.setProperty('--text-ans', arr[2].ans);
}