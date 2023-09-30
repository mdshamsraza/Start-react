function customRender(reactElemnet, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTMl = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const props in reactElement.props) {
         if(props === 'children') continue; 
        domElement.setAttribute(props,reactElement.props[props])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:{
        href: 'http://reactjs.org',
        target:'---black'
    },
    children: 'click me to visit react'
}
const mainContainer = document.querySelector("#Root")
customRender(reactElement, mainContainer)