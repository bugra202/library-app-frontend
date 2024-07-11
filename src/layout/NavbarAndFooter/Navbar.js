export const Navbar = () => {

    return (

        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>

            <div className='container-fluid'>
                <span className='navbar-brand'> Buğra'nın Kitaplığı</span>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                        data-bs-target='#navbarNavDropdown'
                        aria-contorls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Search Books</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item m-1'>
                            <a type='button' className='btn btn-outline-light' href='#'>Sign in</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )

}

// HTML etiketlerini ve onların işlevlerini sırayla açıklayalım:
//
//     <nav>: HTML5'de tanımlanan bir element olan nav, bir navigasyon bağlamı sağlar. Bu element, bir sayfa veya bir bölüm içindeki gezinme bağlantılarını gruplamak için kullanılır.
//
//         <div className='container-fluid'>: <div> elementi, içindeki öğeleri gruplamak için kullanılan genel bir blok elementidir. container-fluid sınıfı, Bootstrap tarafından sağlanan bir sınıftır ve içindeki öğelerin ekranın tam genişliğini kaplamasını sağlar.
//
//             <span className='navbar-brand'>Buğra'nın Kitaplığı</span>: <span> elementi, içinde metin veya içerik bulundurmak için kullanılır. navbar-brand sınıfı, Bootstrap'te navigasyon çubuğunda logo veya markayı temsil eden metni stillemek için kullanılır.
//
// <button className='navbar-toggler' ...>: <button> elementi, kullanıcı tarafından tıklanabilir bir düğme oluşturur. navbar-toggler sınıfı, Bootstrap'te mobil cihazlarda menüyü açıp kapatan özel bir düğmeyi temsil eder.
//
// data-bs-toggle='collapse': Bootstrap tarafından sağlanan özellik, düğmenin bir collapse (daralma) etkinliği tetiklemesini sağlar.
// data-bs-target='#navbarNavDropdown': Collapse işleminin hedeflendiği elementin ID'sini belirtir.
// aria-controls='navbarNavDropdown': Erişilebilirlik için ek bir kontrol sağlar.
// aria-expanded='false': Elementin daraltılmış olduğunu belirtir.
// aria-label='Toggle Navigation': Düğmenin amacını açıklayan ek bir erişilebilirlik özelliği.
// <div className='collapse navbar-collapse' id='navbarNavDropdown'>: <div> elementi, içindeki öğeleri gruplamak için kullanılır. collapse ve navbar-collapse sınıfları, Bootstrap tarafından sağlanan sınıflardır ve menü öğelerini daraltıp genişletebilen bir container oluştururlar. id='navbarNavDropdown' ise collapse işleminin hedeflendiği ID'yi belirtir.
//
// <ul className='navbar-nav'>: <ul> elementi, sıralı olmayan liste (unordered list) oluşturur. navbar-nav sınıfı, Bootstrap'te navigasyon menüsü öğelerini listelemek için kullanılır.
//
// <li className='nav-item'>: <li> elementi, sıralı olmayan listelerde her bir öğeyi temsil eder. nav-item sınıfı, Bootstrap'te navigasyon menüsü öğelerinin her birini stillemek için kullanılır.
//
// <a className='nav-link' href='#'>Home</a> ve <a className='nav-link' href='#'>Search Books</a>: <a> elementi, bir bağlantı oluşturur. nav-link sınıfı, Bootstrap'te navigasyon bağlantıları için kullanılır. href='#' attribute'ü bağlantının hedefini belirtir. Burada "Home" ve "Search Books" bağlantıları bulunuyor.
//
// <ul className='navbar-nav ms-auto'>: <ul> elementi, sıralı olmayan liste (unordered list) oluşturur. navbar-nav sınıfı, Bootstrap'te navigasyon menüsü öğelerini listelemek için kullanılır. ms-auto sınıfı, Bootstrap'te sola hizalanmış (ms = margin-start) öğelerin sağa (end) doğru itilmesini sağlar (auto = otomatik).
//
// <a type='button' className='btn btn-outline-light' href='#'>Sign in</a>: <a> elementi, bir bağlantı oluşturur. btn ve btn-outline-light sınıfları, Bootstrap'te düğmeler için kullanılır. btn-outline-light düğmenin dış çizgisi beyaz (light) olacak şekilde tasarlanmıştır. "Sign in" bağlantı düğmesi.