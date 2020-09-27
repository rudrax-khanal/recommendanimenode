import Link from 'next/link'

function toggleDemo() {
    halfmoon.toggleDarkMode()
}

const Header = () => {
    return(
        <div>
            <div class="container">
                <div class="content">
                    <p>Copyright &copy; 2020. <a href="https://rudrax.net">Rudrax</a></p>
                    <script href="/public/js/halfmoon.js"></script>
                    {toggleDemo}
                </div>
            </div>
        </div>
    )
}

export default Header