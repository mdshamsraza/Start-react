import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from 'App'

// function custom(){
//     return(
//         <div>
//             <h1>hey how | are u</h1>
//         </div>
//     )
// }

// const ReactElement = {
//     type: 'a',
//     props:{
//         href: 'http://reactjs.org',
//         target:'---black'
//     },
//     children: 'click me to visit react'
// }

// const anotherElement = (
//     <a href='http://react.org' target='_blank'>visit react.com</a>
// )
const janu = 'tuhi re tuhi re tune mujhse ayesa ki kiya re'

const reactElement = React.createElement(
    'a',
    {
    href:'http://google.com',
    target: '_blank'
    },
    'click me to visit google.com',
    janu
)

ReactDOM.createRoot(document.getElementById('root')).render(

    
   reactElement

)
