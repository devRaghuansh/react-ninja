// React portal is a way to creact a component outside of 
//Portals provide a first-class way to render children into a DOM-node
// that exists outside the DOM hirearchy of the parent component.
//Parent components means root component
//What is the benefit of portal
import  ReactDOM from 'react-dom';
const MyPortal = () => {
    return (
        ReactDOM.createPortal(
        <div>
            <button>My Portal</button>
        </div>,
        document.getElementById('my-portal')
        )
        
    )
}
export default MyPortal