/*
=====================================
   switchteme.js
=====================================
*/
var pathArray = window.location.pathname.split( '/' );
var pageName = pathArray[(pathArray.length - 1)]; // Value of last string in pathArray
var themeColorDk = '--Theme-Color-Dk';
var themeColor = '--Theme-Color';
var themeColorMd = '--Theme-Color-Md';
var themeColorLt = '--Theme-Color-Lt';

console.log (pageName);

function changeTheme (SectionName) {
    document.documentElement.style.setProperty(themeColorDk, 'var(--'+ SectionName + '-Color-Dk)');
    document.documentElement.style.setProperty(themeColor, 'var(--'+ SectionName + '-Color)');
    document.documentElement.style.setProperty(themeColorMd, 'var(--'+ SectionName + '-Color-Md)');
    document.documentElement.style.setProperty(themeColorLt, 'var(--'+ SectionName + '-Color-Lt)');
}
    

if (pageName.substring(0,8) === 'building') {
    console.log(' Yep, this is the ' + pageName + ' page');
    changeTheme('Bldg');
} else if(pageName.substring(0,7) === 'support') {
    console.log('Yep, this is the ' + pageName + ' page');
    changeTheme('Support');
} else if(pageName.substring(0,7) === 'systems') {
    console.log('Yep, this is the ' + pageName + ' page');
    changeTheme('System');
} else {
    console.log(' This ' + pageName + ' page does not have an associated theme.');
}

	  


