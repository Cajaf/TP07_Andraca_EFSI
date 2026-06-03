import instagramLogo from "../fotos/Instagram.png"
import homeIcon from "../fotos/home.png"
import searchIcon from "../fotos/search.png"
import exploreIcon from "../fotos/explorer.png"
import reelsIcon from "../fotos/reels.png"
import messagesIcon from "../fotos/messages.png"
import likeIcon from "../fotos/like.png"
import createIcon from "../fotos/create.png"
import moreIcon from "../fotos/More.png"
import './SideBar.css'

const SideBar = () => {
  return (
    <section>
      <h1>Instagram</h1>

      <div>
        <img src={homeIcon} alt="Home" />
        <h2>Home</h2>
      </div>
      <div>
        <img src={searchIcon} alt="Search" />
        <h2>Search</h2>
      </div>
      <div>
        <img src={exploreIcon} alt="Explore" />
        <h2>Explore</h2>
      </div>
      <div>
        <img src={reelsIcon} alt="Reels" />
        <h2>Reels</h2>
      </div>
      <div>
        <img src={messagesIcon} alt="Messages" />
        <h2>Messages</h2>
      </div>
      <div>
        <img src={likeIcon} alt="Notifications" />
        <h2>Notifications</h2>
      </div>
      <div>
        <img src={createIcon} alt="Create" />
        <h2>Create</h2>
      </div>
      <div>
        <img src="" alt="Profile" />
        <h2>Profile</h2>
      </div>
      <div>
        <img src={moreIcon} alt="More" />
        <h2>More</h2>
      </div>
    </section>
  )
}

export default SideBar
