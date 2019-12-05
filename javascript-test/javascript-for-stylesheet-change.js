window.onload = () => {

    const button = document.getElementById('buttonAction');

    button.onclick = () => {
        const defaults = document.getElementById('default');
        const basic = document.getElementById('basic');

        disableStylesheet(defaults);
        enableStylesheet(basic);
    }

}

function enableStylesheet (node) {
    node.rel = 'stylesheet';
    }
    
function disableStylesheet (node) {
    node.rel = 'alternate stylesheet';
}                