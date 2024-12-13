import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(){
    return(
        <header className="container-fluid bg-light border-bottom py-3">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-8">
            <h1 className="mb-1">Thair Nemer Khaled</h1>
            <h2 className="text-muted">Administrative Store</h2>
          </div>
        </div>
      </header>
    )
}