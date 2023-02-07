import "./header.css";

export default function Header() {
    return (
        <dev className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>

            </div>
            <img className="headerImg" src="../topbar/img/img_girl.jpg" alt="" />
        </dev>
    )
}